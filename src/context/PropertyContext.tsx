import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AppState, Property, PropertyType, PropertyFormData } from '../types';
import { mockProperties } from '../data/mockData';

type Action =
  | { type: 'SET_PROPERTIES'; payload: Property[] }
  | { type: 'ADD_PROPERTY'; payload: Property }
  | { type: 'DELETE_PROPERTY'; payload: string }
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_SELECTED_TYPE'; payload: PropertyType | 'All' }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_SELECTED_PROPERTY'; payload: Property | null }
  | { type: 'SET_MODAL_OPEN'; payload: boolean }
  | { type: 'FILTER_PROPERTIES' };

const initialState: AppState = {
  properties: [],
  filteredProperties: [],
  searchTerm: '',
  selectedType: 'All',
  isDarkMode: false,
  selectedProperty: null,
  isModalOpen: false,
};

function propertyReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_PROPERTIES':
      return {
        ...state,
        properties: action.payload,
        filteredProperties: action.payload,
      };
    
    case 'ADD_PROPERTY':
      const newProperties = [...state.properties, action.payload];
      return {
        ...state,
        properties: newProperties,
        filteredProperties: newProperties,
      };
    
    case 'DELETE_PROPERTY':
      const updatedProperties = state.properties.filter(property => property.id !== action.payload);
      return {
        ...state,
        properties: updatedProperties,
        filteredProperties: updatedProperties,
      };
    
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    
    case 'SET_SELECTED_TYPE':
      return {
        ...state,
        selectedType: action.payload,
      };
    
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    
    case 'SET_SELECTED_PROPERTY':
      return {
        ...state,
        selectedProperty: action.payload,
      };
    
    case 'SET_MODAL_OPEN':
      return {
        ...state,
        isModalOpen: action.payload,
      };
    
    case 'FILTER_PROPERTIES':
      let filtered = state.properties;
      
      // Filter by search term
      if (state.searchTerm) {
        filtered = filtered.filter(
          property =>
            property.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }
      
      // Filter by type
      if (state.selectedType !== 'All') {
        filtered = filtered.filter(property => property.type === state.selectedType);
      }
      
      return {
        ...state,
        filteredProperties: filtered,
      };
    
    default:
      return state;
  }
}

interface PropertyContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  addProperty: (formData: PropertyFormData) => void;
  deleteProperty: (id: string) => void;
  openPropertyModal: (property: Property) => void;
  closePropertyModal: () => void;
  toggleDarkMode: () => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(propertyReducer, initialState);

  // Load initial data
  useEffect(() => {
    dispatch({ type: 'SET_PROPERTIES', payload: mockProperties });
  }, []);

  // Apply filters whenever search term or selected type changes
  useEffect(() => {
    dispatch({ type: 'FILTER_PROPERTIES' });
  }, [state.searchTerm, state.selectedType, state.properties]);

  // Handle dark mode
  useEffect(() => {
    if (state.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.isDarkMode]);

  const addProperty = (formData: PropertyFormData) => {
    const newProperty: Property = {
      id: Date.now().toString(),
      name: formData.name,
      type: formData.type,
      location: formData.location,
      price: formData.price,
      currency: formData.currency,
      description: formData.description,
      contactNumber: formData.contactNumber,
      image: formData.image ? URL.createObjectURL(formData.image) : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    };
    dispatch({ type: 'ADD_PROPERTY', payload: newProperty });
  };

  const deleteProperty = (id: string) => {
    dispatch({ type: 'DELETE_PROPERTY', payload: id });
  };

  const openPropertyModal = (property: Property) => {
    dispatch({ type: 'SET_SELECTED_PROPERTY', payload: property });
    dispatch({ type: 'SET_MODAL_OPEN', payload: true });
  };

  const closePropertyModal = () => {
    dispatch({ type: 'SET_MODAL_OPEN', payload: false });
    dispatch({ type: 'SET_SELECTED_PROPERTY', payload: null });
  };

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  const value: PropertyContextType = {
    state,
    dispatch,
    addProperty,
    deleteProperty,
    openPropertyModal,
    closePropertyModal,
    toggleDarkMode,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
}

export function usePropertyContext() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('usePropertyContext must be used within a PropertyProvider');
  }
  return context;
}
