import { Property } from '@/lib/types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Waterfront Apartment',
    address: {
      street: '15/123 Harbour Street',
      suburb: 'Circular Quay',
      state: 'NSW',
      postcode: '2000',
      country: 'Australia'
    },
    coordinates: {
      lat: -33.8624,
      lng: 151.2100
    },
    price: {
      amount: 1850000,
      type: 'sale'
    },
    propertyType: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    carSpaces: 1,
    buildingSize: 95,
    features: ['Water views', 'Balcony', 'Security parking', 'Gym', 'Pool'],
    description: 'Stunning waterfront apartment with panoramic harbour views. This modern 2-bedroom, 2-bathroom apartment features premium finishes throughout.',
    images: ['/images/properties/property-1-1.jpg', '/images/properties/property-1-2.jpg'],
    agent: {
      name: 'Sarah Chen',
      phone: '0412 345 678',
      email: 'sarah.chen@randw.com.au',
      agency: 'Richardson & Wrench'
    },
    listingDate: '2024-01-15',
    status: 'active'
  },
  {
    id: '2',
    title: 'Family Home with Garden',
    address: {
      street: '42 Oak Avenue',
      suburb: 'Bondi',
      state: 'NSW',
      postcode: '2026',
      country: 'Australia'
    },
    coordinates: {
      lat: -33.8915,
      lng: 151.2767
    },
    price: {
      amount: 2750000,
      type: 'sale'
    },
    propertyType: 'house',
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    landSize: 650,
    buildingSize: 220,
    features: ['Swimming pool', 'Garden', 'Double garage', 'Study', 'Walk to beach'],
    description: 'Beautiful family home just minutes from Bondi Beach. Features spacious living areas, modern kitchen, and a resort-style backyard.',
    images: ['/images/properties/property-2-1.jpg', '/images/properties/property-2-2.jpg'],
    agent: {
      name: 'Michael Thompson',
      phone: '0413 456 789',
      email: 'michael.thompson@randw.com.au',
      agency: 'Richardson & Wrench'
    },
    listingDate: '2024-01-20',
    status: 'active'
  },
  {
    id: '3',
    title: 'City Penthouse with Terrace',
    address: {
      street: 'Penthouse/88 George Street',
      suburb: 'Sydney',
      state: 'NSW',
      postcode: '2000',
      country: 'Australia'
    },
    coordinates: {
      lat: -33.8688,
      lng: 151.2093
    },
    price: {
      amount: 4500000,
      type: 'sale'
    },
    propertyType: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    carSpaces: 2,
    buildingSize: 180,
    features: ['Rooftop terrace', 'City views', 'Wine cellar', 'Concierge', 'Gym'],
    description: 'Luxury penthouse in the heart of Sydney CBD with spectacular city and harbour views. Features include a private rooftop terrace and premium finishes.',
    images: ['/images/properties/property-3-1.jpg', '/images/properties/property-3-2.jpg'],
    agent: {
      name: 'Emma Wilson',
      phone: '0414 567 890',
      email: 'emma.wilson@randw.com.au',
      agency: 'Richardson & Wrench'
    },
    listingDate: '2024-01-25',
    status: 'active'
  },
  {
    id: '4',
    title: 'Cozy Studio Apartment',
    address: {
      street: '7/205 Elizabeth Street',
      suburb: 'Surry Hills',
      state: 'NSW',
      postcode: '2010',
      country: 'Australia'
    },
    coordinates: {
      lat: -33.8830,
      lng: 151.2113
    },
    price: {
      amount: 650,
      type: 'rent',
      period: 'week'
    },
    propertyType: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    features: ['Furnished', 'Near transport', 'Cafes nearby', 'Secure building'],
    description: 'Perfect studio apartment for young professionals. Located in vibrant Surry Hills with excellent transport links.',
    images: ['/images/properties/property-4-1.jpg'],
    agent: {
      name: 'David Lee',
      phone: '0415 678 901',
      email: 'david.lee@randw.com.au',
      agency: 'Richardson & Wrench'
    },
    listingDate: '2024-01-28',
    status: 'active'
  },
  {
    id: '5',
    title: 'Heritage Terrace House',
    address: {
      street: '156 Crown Street',
      suburb: 'Paddington',
      state: 'NSW',
      postcode: '2021',
      country: 'Australia'
    },
    coordinates: {
      lat: -33.8847,
      lng: 151.2278
    },
    price: {
      amount: 3200000,
      type: 'sale'
    },
    propertyType: 'townhouse',
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    landSize: 120,
    buildingSize: 160,
    features: ['Heritage features', 'Courtyard', 'Period details', 'Renovation potential'],
    description: 'Charming heritage terrace house in prestigious Paddington. Features original period details with scope for modern renovation.',
    images: ['/images/properties/property-5-1.jpg', '/images/properties/property-5-2.jpg'],
    agent: {
      name: 'Lisa Brown',
      phone: '0416 789 012',
      email: 'lisa.brown@randw.com.au',
      agency: 'Richardson & Wrench'
    },
    listingDate: '2024-02-01',
    status: 'active'
  }
];