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

const setCity = (city: CityName) => ({
  payload: city,
  type: ActionTpe.SetCity,
});

function reducer(state: OfferState = initialState, action: {payload: unknown; type: ActionTpe}): OfferState{
  switch(action.type){
    case ActionTpe.SetCity:
      return{
        ...state,
        city: action.payload as CityName,
      };
    default:
      return state;
  }
}

export {reducer, setCity};
