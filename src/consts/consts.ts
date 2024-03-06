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

export const insideItems: string[] = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];


export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = 'favorites',
  Offer = '/offer',
  NotFound = '*',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}
