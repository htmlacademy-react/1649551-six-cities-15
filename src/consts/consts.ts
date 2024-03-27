export const Settings = {
  OffersCount: 10
};

export const CITIES = [
  {
    id: 'paris',
    location: {latitude: 48.85661, longitude: 2.351499, zoom: 13},
    name: 'Paris',
    isActive: false
  },
  {
    id: 'cologne',
    location: {latitude: 50.938361, longitude: 6.959974, zoom: 13},
    name: 'Cologne',
    isActive: false
  },
  {
    id: 'brussels',
    location: {latitude: 50.846557, longitude: 4.351697, zoom: 13},
    name: 'Brussels',
    isActive: false
  },
  {
    id: 'amsterdam',
    location: {latitude: 52.37454, longitude: 4.897976, zoom: 13},
    name: 'Amsterdam',
    isActive: true
  },
  {
    id: 'hamburg',
    location: {latitude: 53.550341, longitude: 10.000654, zoom: 13},
    name: 'Hamburg',
    isActive: false
  },
  {
    id: 'dusseldorf',
    location: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    name: 'Dusseldorf',
    isActive: false
  },
] as const;

export type CityName = (typeof CITIES)[number]['name'];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = 'favorites',
  Offer = '/offer',
  Room = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export const raitings = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

export const URL_MARKER_DEFAULT = './icons/marker-default.svg';

export const URL_MARKER_ACTIVE = './icons/marker-active.svg';
