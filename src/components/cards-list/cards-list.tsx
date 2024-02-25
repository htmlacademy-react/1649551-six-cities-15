import { offers } from '../../mocks/cards/cards-mocks';
import PlaceCard from '../card/place-card';

function CardsList(): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => (
        <PlaceCard
          key = {card.id}
          previewImage = {card.previewImage}
          isPremium = {card.isPremium}
          price={card.price}
          title={card.title}
          type = {card.type}
          rating={card.rating}
        />
      ))}
    </div>
  );
}

export default CardsList;
