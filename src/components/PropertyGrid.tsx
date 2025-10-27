import { Property } from '@/lib/types/property';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  onPropertySelect?: (property: Property) => void;
  className?: string;
}

export default function PropertyGrid({ properties, onPropertySelect, className = '' }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
        <div className="text-center">
          <h3 className="text-lg font-manrope-semibold text-randw-navy mb-2">No properties found</h3>
          <p className="text-gray-600 font-manrope-regular">Try adjusting your search criteria to see more results.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onSelect={onPropertySelect}
          />
        ))}
      </div>
      
      {/* Results Summary */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t">
        <p className="text-sm text-gray-600 font-manrope-regular">
          Showing {properties.length} {properties.length === 1 ? 'property' : 'properties'}
        </p>
        
        {properties.length > 0 && (
          <button className="text-randw-red font-manrope-medium text-sm hover:underline">
            Load more properties
          </button>
        )}
      </div>
    </div>
  );
}