export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  location: string;
  price: number;
  description: string;
  image: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export type PropertyType = 'House' | 'Apartment' | 'Condo' | 'Villa' | 'Townhouse';

export interface PropertyFormData {
  name: string;
  type: PropertyType;
  price: number;
  location: string;
  description: string;
}

export interface AppState {
  properties: Property[];
  filteredProperties: Property[];
  searchTerm: string;
  selectedType: PropertyType | 'All';
  isDarkMode: boolean;
  selectedProperty: Property | null;
  isModalOpen: boolean;
}
