import React from 'react';
import { Filter } from 'lucide-react';
import { PropertyType } from '../types';
import { usePropertyContext } from '../context/PropertyContext';

const propertyTypes: PropertyType[] = ['House', 'Apartment', 'Condo', 'Villa', 'Townhouse'];

export default function PropertyFilter() {
  const { state, dispatch } = usePropertyContext();

  const handleTypeChange = (type: PropertyType | 'All') => {
    dispatch({ type: 'SET_SELECTED_TYPE', payload: type });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filter Properties</h3>
      </div>
      
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Property Type
        </label>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <button
            onClick={() => handleTypeChange('All')}
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              state.selectedType === 'All'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All Types
          </button>
          
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                state.selectedType === type
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      
      {state.searchTerm && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Showing results for: <span className="font-medium">"{state.searchTerm}"</span>
          </p>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {state.filteredProperties.length} of {state.properties.length} properties
        </p>
      </div>
    </div>
  );
}
