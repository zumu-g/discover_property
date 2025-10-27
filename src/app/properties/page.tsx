'use client';

import { useState } from 'react';
import { Property } from '@/lib/types/property';
import { mockProperties } from '@/lib/data/mockProperties';
import PropertyGrid from '@/components/PropertyGrid';
import PropertyMap from '@/components/PropertyMap';
import { Search, Filter, MapIcon, Grid } from 'lucide-react';
import Link from 'next/link';

export default function PropertiesPage() {
  const [properties] = useState<Property[]>(mockProperties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="min-h-screen bg-randw-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-manrope-bold text-randw-navy">Discover</h1>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-randw-navy hover:text-randw-red transition-colors font-manrope-medium">Home</Link>
                <Link href="/properties" className="text-randw-red font-manrope-medium">Properties</Link>
                <Link href="#" className="text-randw-navy hover:text-randw-red transition-colors font-manrope-medium">Agents</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-randw-navy hover:text-randw-red transition-colors font-manrope-medium">Sign In</button>
              <button className="bg-randw-red text-white px-4 py-2 rounded-lg font-manrope-medium hover:bg-randw-red/90 transition-colors">
                For Agents
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, property type, or natural language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-randw-red focus:border-randw-red font-manrope-regular"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-manrope-medium">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-3 ${viewMode === 'grid' ? 'bg-randw-navy text-white' : 'bg-white text-randw-navy hover:bg-gray-50'} transition-colors`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`px-3 py-3 ${viewMode === 'map' ? 'bg-randw-navy text-white' : 'bg-white text-randw-navy hover:bg-gray-50'} transition-colors`}
                >
                  <MapIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'grid' ? (
          <PropertyGrid 
            properties={properties}
            onPropertySelect={handlePropertySelect}
          />
        ) : (
          <div className="h-[600px] rounded-lg overflow-hidden">
            <PropertyMap
              properties={properties}
              onPropertySelect={handlePropertySelect}
            />
          </div>
        )}

        {/* Selected Property Panel */}
        {selectedProperty && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-manrope-semibold text-randw-navy">{selectedProperty.title}</h3>
                <p className="text-sm text-gray-600">{selectedProperty.address.suburb}</p>
              </div>
              <button 
                onClick={() => setSelectedProperty(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}