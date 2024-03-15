import leaflet from 'leaflet';
import { CityType, OfferType } from '../../types/types';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../consts/consts';

type MapProps = {
  className?: string;
  city: CityType;
  offers: OfferType[];
  activeOffer?: OfferType | null;
}

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers, activeOffer, className }: MapProps): JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap({ location: city.location, containerRef: mapContainerRef });

  useEffect((): void => {
    if(map){
      offers.forEach((offer): void => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOffer?.id ? activeMarkerIcon : defaultMarkerIcon,
          })
          .addTo(map);
      });
    }
  },[activeOffer, map, offers]);


  return <section className={`${className} map`} ref={mapContainerRef} />;
}

export default Map;
