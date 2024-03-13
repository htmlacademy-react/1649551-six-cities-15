import { OfferType } from '../../types/types';
import NearPlaceCard from './near-place-card';

type NearPlaceListProps = {
  offers:OfferType[];
}

function NearPlaceList({offers}:NearPlaceListProps): JSX.Element {
  return(
    <div className="near-places__list places__list">
      {offers.map((nearOffer) => (
        <NearPlaceCard
          key={nearOffer.id}
          nearOffer={nearOffer}
        />
      ))}
    </div>
  );
}

export default NearPlaceList;
