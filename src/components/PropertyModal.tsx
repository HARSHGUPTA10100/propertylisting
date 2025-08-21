import { X, MapPin, DollarSign, Home, Map } from 'lucide-react';
import { usePropertyContext } from '../context/PropertyContext';

export default function PropertyModal() {
  const { state, closePropertyModal } = usePropertyContext();

  if (!state.selectedProperty || !state.isModalOpen) {
    return null;
  }

  const property = state.selectedProperty;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getGoogleMapsUrl = (lat: number, lng: number) => {
    return `https://www.google.com/maps?q=${lat},${lng}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={closePropertyModal}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={closePropertyModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>

            {/* Property Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                  {property.type}
                </span>
              </div>
            </div>

            {/* Property Details */}
            <div className="px-6 py-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {property.name}
                </h2>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>

                <div className="flex items-center text-primary-600 dark:text-primary-400 mb-4">
                  <DollarSign className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">{formatPrice(property.price)}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Home className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Property Type</p>
                    <p className="font-medium text-gray-900 dark:text-white">{property.type}</p>
                  </div>
                </div>

                {property.coordinates && (
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Map className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <a
                        href={getGoogleMapsUrl(property.coordinates.lat, property.coordinates.lng)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={closePropertyModal}
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
                {property.coordinates && (
                  <a
                    href={getGoogleMapsUrl(property.coordinates.lat, property.coordinates.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors text-center"
                  >
                    <Map className="w-4 h-4 inline mr-2" />
                    Open in Maps
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
