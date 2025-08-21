export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  location: string;
  price: number;
  currency: 'INR' | 'USD';
  description: string;
  image: string;
  photos?: string[];
  contactNumber: string;
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
  currency: 'INR' | 'USD';
  location: string;
  description: string;
  photos?: File[];
  contactNumber: string;
  image?: File;
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
