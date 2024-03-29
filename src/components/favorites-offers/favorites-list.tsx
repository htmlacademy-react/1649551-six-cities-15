import FavoriteItem from './favorites-item';
import FavoriteEmpty from './favorite-empty';
import { useAppSelector } from '../../hooks/store';
import { selectOffers } from '../../store/selectors/offers';

function FavoritesList(): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  if(favoriteOffers.length === 0){
    return(
      <FavoriteEmpty />
    );
  } else{
    return(
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {cities.map((city) => (
            <FavoriteItem
              key={city}
              city={city}
              offers={favoriteOffers.filter((place) => place.city.name === city)}
            />
          ))}
        </ul>
      </section>
    );
  }

}

export default FavoritesList;
