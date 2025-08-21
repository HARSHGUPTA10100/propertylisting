import { Link } from 'react-router-dom';
import { Plus, Home } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import { usePropertyContext } from '../context/PropertyContext';

export default function PropertyList() {
  const { state } = usePropertyContext();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Property Listings
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Discover amazing properties in prime locations
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link
                to="/add"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Property
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Filters */}
          <div className="lg:col-span-1">
            <PropertyFilter />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {state.filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <Home className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  No properties found
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {state.searchTerm || state.selectedType !== 'All'
                    ? 'Try adjusting your search criteria or filters.'
                    : 'Get started by adding your first property.'}
                </p>
                {!state.searchTerm && state.selectedType === 'All' && (
                  <div className="mt-6">
                    <Link
                      to="/add"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Property
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {state.filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
