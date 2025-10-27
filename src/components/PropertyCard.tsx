import { Property } from '@/lib/types/property';
import { Heart, MapPin, Bed, Bath, Car, Square } from 'lucide-react';
import Image from 'next/image';

interface PropertyCardProps {
  property: Property;
  onSelect?: (property: Property) => void;
  className?: string;
}

export default function PropertyCard({ property, onSelect, className = '' }: PropertyCardProps) {
  const formatPrice = (price: Property['price']) => {
    const formatted = new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price.amount);

    if (price.type === 'rent' && price.period) {
      return `${formatted} per ${price.period}`;
    }
    return formatted;
  };

  const handleClick = () => {
    onSelect?.(property);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] ${className}`}
      onClick={handleClick}
    >
      {/* Property Image */}
      <div className="relative h-48 bg-randw-cream">
        {property.images.length > 0 ? (
          <Image 
            src={property.images[0]} 
            alt={property.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Square className="w-16 h-16 text-randw-navy opacity-20" />
          </div>
        )}
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-randw-navy" />
        </button>
        
        {/* Property Type Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-randw-navy text-white px-2 py-1 rounded-md text-xs font-manrope-medium capitalize">
            {property.propertyType}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Price */}
        <div className="mb-2">
          <h3 className="text-xl font-manrope-bold text-randw-navy">
            {formatPrice(property.price)}
          </h3>
          {property.price.type === 'sale' && (
            <span className="text-sm text-gray-600 font-manrope-medium">For Sale</span>
          )}
          {property.price.type === 'rent' && (
            <span className="text-sm text-gray-600 font-manrope-medium">For Rent</span>
          )}
        </div>

        {/* Title */}
        <h4 className="font-manrope-semibold text-randw-navy mb-2 line-clamp-1">
          {property.title}
        </h4>

        {/* Address */}
        <div className="flex items-start gap-1 mb-3 text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span className="text-sm font-manrope-regular line-clamp-2">
            {property.address.street}, {property.address.suburb} {property.address.state} {property.address.postcode}
          </span>
        </div>

        {/* Property Features */}
        <div className="flex items-center gap-4 mb-3">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4 text-randw-navy" />
              <span className="text-sm font-manrope-medium text-gray-700">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4 text-randw-navy" />
              <span className="text-sm font-manrope-medium text-gray-700">{property.bathrooms}</span>
            </div>
          )}
          {property.carSpaces && (
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4 text-randw-navy" />
              <span className="text-sm font-manrope-medium text-gray-700">{property.carSpaces}</span>
            </div>
          )}
        </div>

        {/* Key Features */}
        {property.features.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {property.features.slice(0, 3).map((feature, index) => (
                <span 
                  key={index}
                  className="bg-randw-cream text-randw-navy px-2 py-1 rounded-md text-xs font-manrope-medium"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 3 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{property.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Agent Info */}
        <div className="border-t pt-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-manrope-semibold text-randw-navy">{property.agent.name}</p>
              <p className="text-xs text-gray-600 font-manrope-regular">{property.agent.agency}</p>
            </div>
            <button className="bg-randw-red text-white px-3 py-1 rounded-md text-sm font-manrope-medium hover:bg-randw-red/90 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}