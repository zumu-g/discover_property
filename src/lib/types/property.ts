export interface Property {
  id: string;
  title: string;
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  price: {
    amount: number;
    type: 'sale' | 'rent';
    period?: 'week' | 'month' | 'year';
  };
  propertyType: 'house' | 'apartment' | 'townhouse' | 'unit' | 'villa' | 'land';
  bedrooms?: number;
  bathrooms?: number;
  carSpaces?: number;
  landSize?: number;
  buildingSize?: number;
  features: string[];
  description: string;
  images: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    agency: string;
  };
  listingDate: string;
  status: 'active' | 'sold' | 'leased' | 'withdrawn';
}

export interface PropertySearchFilters {
  location?: string;
  priceMin?: number;
  priceMax?: number;
  propertyType?: Property['propertyType'][];
  bedrooms?: number;
  bathrooms?: number;
  features?: string[];
  listingType?: 'sale' | 'rent';
}

export interface MapViewport {
  latitude: number;
  longitude: number;
  zoom: number;
}