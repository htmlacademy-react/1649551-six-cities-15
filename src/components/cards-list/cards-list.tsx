import { OfferType } from '../../types/types';
import PlaceCard from '../card/place-card';

type CardListProps = {
  offers: OfferType[];
  handleHover: (offer?: OfferType) => void;
}

function CardsList({ offers, handleHover }: CardListProps): JSX.Element {

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => (
        <PlaceCard
          key = {card.id}
          offer = {card}
          handleHover={handleHover}
        />
      ))}
    </div>
  );
}

export default CardsList;
