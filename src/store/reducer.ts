import { createAction, createReducer } from '@reduxjs/toolkit';
import { CITIES, CityName } from '../consts/consts';
import { offers } from '../mocks/cards/cards-mocks';
import { OfferType } from '../types/types';

interface OfferState {
  city: CityName;
  offers: OfferType[];
}

const initialState: OfferState = {
  city: CITIES[0].name,
  offers
};

export enum ActionTpe {
  SetCity = 'offers/setCity',
}

const setCity = createAction<CityName>('offers/setCity');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
});

export {reducer, setCity};
