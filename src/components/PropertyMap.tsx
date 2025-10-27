'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Property, MapViewport } from '@/lib/types/property';

interface PropertyMapProps {
  properties: Property[];
  viewport?: MapViewport;
  onPropertySelect?: (property: Property) => void;
  className?: string;
}

export default function PropertyMap({ 
  properties, 
  viewport = { latitude: -33.8688, longitude: 151.2093, zoom: 10 },
  onPropertySelect,
  className = ''
}: PropertyMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [viewport.longitude, viewport.latitude],
      zoom: viewport.zoom,
    });

    map.current.on('load', () => {
      setIsLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [viewport]);

  useEffect(() => {
    if (!map.current || !isLoaded || !properties.length) return;

    const markers: mapboxgl.Marker[] = [];

    properties.forEach((property) => {
      const el = document.createElement('div');
      el.className = 'property-marker';
      el.innerHTML = `
        <div class="bg-randw-navy text-white px-2 py-1 rounded-lg shadow-lg text-sm font-manrope-medium cursor-pointer hover:bg-randw-red transition-colors">
          $${property.price.amount.toLocaleString()}
        </div>
      `;

      el.addEventListener('click', () => {
        onPropertySelect?.(property);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([property.coordinates.lng, property.coordinates.lat])
        .addTo(map.current!);

      markers.push(marker);
    });

    return () => {
      markers.forEach(marker => marker.remove());
    };
  }, [properties, isLoaded, onPropertySelect]);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full min-h-[400px] rounded-lg overflow-hidden ${className}`}
    />
  );
}