import { OfferType } from '../../types/types';
import PlaceCard from '../card/place-card';

type CardListProps = {
  offers: OfferType[];
  handleHover: (offer?: OfferType) => void;
  block?: string;
}

function CardsList({ offers, handleHover, block }: CardListProps): JSX.Element {

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => (
        <PlaceCard
          key = {card.id}
          offer = {card}
          handleHover={handleHover}
          block={block}
        />
      ))}
    </div>
  );
}

export default CardsList;
