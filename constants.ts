
import { Property, PropertyType, ListingType } from './types';

export const COMMUNES = [
  'Concepción',
  'Chiguayante',
  'San Pedro de la Paz',
  'Talcahuano',
  'Coronel',
  'Penco',
  'Los Ángeles'
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'espectacular-1',
    title: 'Residencia San Pedro del Valle',
    subtitle: 'Arquitectura orgánica y vistas ininterrumpidas al lago',
    location: 'San Pedro de la Paz, Chile',
    price: 32500,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
    bedrooms: 5,
    bathrooms: 6,
    area: 580,
    type: PropertyType.MANSION,
    listingType: ListingType.SALE,
    description: 'Esta impresionante propiedad de diseño contemporáneo destaca por su integración total con el entorno natural. El uso extensivo de maderas nobles en cielos y muros, junto a ventanales de piso a cielo, crean una experiencia de vida única frente al lago. Incluye cocina de alta gama con isla de cuarzo y una terraza panorámica que redefine el concepto de exterior.',
    amenities: ['Muelle Privado', 'Cielos de Madera', 'Cocina de Autor', 'Terraza Panorámica', 'Domótica'],
    isPremium: true
  },
  {
    id: '1',
    title: 'Villa Moderna Frente al Mar',
    subtitle: 'Lujo costero redefinido en la Costa del Sol',
    location: 'Marbella, España',
    price: 4500000,
    currency: '€',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    bedrooms: 5,
    bathrooms: 6,
    area: 650,
    type: PropertyType.VILLA,
    listingType: ListingType.SALE,
    description: 'Espectacular villa moderna con acceso directo a la playa y vistas panorámicas al Mediterráneo.',
    amenities: ['Piscina Privada', 'Vista al Mar', 'Seguridad 24/7'],
    isPremium: true
  },
  {
    id: 'cl-1',
    title: 'Casa Estilo Georgiano en Lonco Parque',
    subtitle: 'Tradición y elegancia en el sector más exclusivo',
    location: 'Chiguayante, Chile',
    price: 18500,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-2a434f678417?q=80&w=1200&auto=format&fit=crop',
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    type: PropertyType.MANSION,
    listingType: ListingType.SALE,
    description: 'Exclusiva propiedad en el sector más consolidado de Chiguayante.',
    amenities: ['Calefacción Central', 'Piscina Temperada'],
    isPremium: false
  }
];
