import { Link } from 'react-router-dom';
import { OfferType } from '../../types/types';
import CardsList from '../cards-list/cards-list';
import { useState } from 'react';
import { Nullable } from 'vitest';
import { AppRoute } from '../../consts/consts';

type FavoriteItemProps = {
  offers: OfferType[];
  city: string;
}

function FavoriteItem({offers, city}: FavoriteItemProps): JSX.Element {
  const filteredOffers = offers.filter((item) => item.city.name === city);

  const [, setActiveOffer] = useState<Nullable<OfferType>>(null);

  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Room} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <CardsList
        offers={filteredOffers}
        handleHover={handleHover}
      />
    </li>
  );
}

export default FavoriteItem;
