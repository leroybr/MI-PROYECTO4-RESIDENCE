
import { GoogleGenAI, Type } from "@google/genai";
import { SearchFilters, PropertyType } from "../types";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const interpretSearchQuery = async (query: string): Promise<SearchFilters> => {
  if (!query) return {};

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User search query: "${query}"`,
      config: {
        systemInstruction: `
          Eres un asistente experto en Real Estate de lujo para LeRoy Residence (estilo JamesEdition).
          Tu objetivo es extraer filtros de búsqueda de una consulta en lenguaje natural.
          
          Mapeo de términos:
          - "casa", "hogar", "finca" -> Villa o Mansión.
          - "departamento", "piso" -> Apartamento.
          - "ático" -> Penthouse.
          
          Extrae ubicación, precio estimado y número de habitaciones si se mencionan.
          Retorna un objeto JSON estricto.
        `,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            location: { type: Type.STRING, description: "Ciudad o zona mencionada" },
            minPrice: { type: Type.NUMBER, description: "Precio mínimo si se menciona" },
            maxPrice: { type: Type.NUMBER, description: "Precio máximo si se menciona" },
            minBedrooms: { type: Type.NUMBER, description: "Mínimo de dormitorios" },
            propertyType: { 
              type: Type.STRING, 
              enum: [
                PropertyType.VILLA,
                PropertyType.APARTMENT,
                PropertyType.PENTHOUSE,
                PropertyType.MANSION,
                PropertyType.ESTATE,
                PropertyType.UNKNOWN
              ]
            },
          },
        },
      },
    });

    const text = response.text;
    if (!text) return {};
    
    return JSON.parse(text) as SearchFilters;

  } catch (error) {
    console.error("Error interpreting search query with Gemini:", error);
    return {};
  }
};
