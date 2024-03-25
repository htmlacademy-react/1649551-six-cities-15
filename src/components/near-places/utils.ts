import { OfferType } from '../../types/types';
import { offers } from '../../mocks/cards/cards-mocks';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (offer: OfferType): OfferType[] => {
  const nearOffers: OfferType[] = [];

  for(let i = 0; i < offers.length; i++){
    if(offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }

    if(nearOffers.length >= MAX_NEAR_OFFERS){
      break;
    }
  }

  return nearOffers;
};
