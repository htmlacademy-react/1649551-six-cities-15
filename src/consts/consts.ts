import { CitiesType } from '../types/types';

export const Settings = {
  OffersCount: 10
};

export const cities: CitiesType = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

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
