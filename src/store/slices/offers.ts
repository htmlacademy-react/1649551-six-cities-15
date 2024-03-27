import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES, CityName } from '../../consts/consts';
import { offers } from '../../mocks/cards/cards-mocks';
import { OfferType } from '../../types/types';

interface OffersState {
  city: CityName;
  offers: OfferType[];
}

const initialState: OffersState = {
  city: CITIES[0].name,
  offers,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
});

const offersActions = offersSlice.actions;

export {offersActions, offersSlice};
