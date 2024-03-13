export type CitiesType = string[];

export type LocationCoordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type CityType = {
  name: string;
  location: LocationCoordinates;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationCoordinates;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  previewImage: string;
  images: string[];
  maxAdults: number;
};
