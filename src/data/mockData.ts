import { Property } from '../types';

export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Modern Downtown Apartment',
    type: 'Apartment',
    location: 'Bandra West, Mumbai',
    price: 45000000,
    currency: 'INR',
    description: 'Beautiful modern apartment in the heart of Bandra with stunning city views. Features include hardwood floors, stainless steel appliances, and a private balcony.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    contactNumber: '+91-9876543210',
    coordinates: { lat: 19.0596, lng: 72.8295 }
  },
  {
    id: '2',
    name: 'Luxury Beach Villa',
    type: 'Villa',
    location: 'Juhu Beach, Mumbai',
    price: 120000000,
    currency: 'INR',
    description: 'Stunning beachfront villa with private pool, ocean views, and luxury finishes throughout. Perfect for those seeking the ultimate beach lifestyle.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
    contactNumber: '+91-9876543211',
    coordinates: { lat: 19.0994, lng: 72.8295 }
  },
  {
    id: '3',
    name: 'Cozy Family House',
    type: 'House',
    location: 'Koramangala, Bangalore',
    price: 65000000,
    currency: 'INR',
    description: 'Charming family home in a quiet neighborhood. Features 4 bedrooms, 3 bathrooms, and a spacious backyard perfect for family gatherings.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    contactNumber: '+91-9876543212',
    coordinates: { lat: 12.9352, lng: 77.6245 }
  },
  {
    id: '4',
    name: 'Urban Loft Condo',
    type: 'Condo',
    location: 'Indiranagar, Bangalore',
    price: 750000,
    currency: 'USD',
    description: 'Contemporary loft-style condo in the vibrant Indiranagar. High ceilings, exposed brick, and modern amenities make this a unique urban living space.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    contactNumber: '+91-9876543213',
    coordinates: { lat: 12.9789, lng: 77.6417 }
  },
  {
    id: '5',
    name: 'Historic Townhouse',
    type: 'Townhouse',
    location: 'Kolkata Heritage, Kolkata',
    price: 85000000,
    currency: 'INR',
    description: 'Beautifully restored historic townhouse with modern updates. Features original architectural details, a private garden, and parking.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    contactNumber: '+91-9876543214',
    coordinates: { lat: 22.5726, lng: 88.3639 }
  },
  {
    id: '6',
    name: 'Mountain View House',
    type: 'House',
    location: 'Dehradun, Uttarakhand',
    price: 950000,
    currency: 'USD',
    description: 'Spectacular mountain home with panoramic views. Features include a stone fireplace, gourmet kitchen, and access to beautiful mountain trails.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
    contactNumber: '+91-9876543215',
    coordinates: { lat: 30.3165, lng: 78.0322 }
  }
];
