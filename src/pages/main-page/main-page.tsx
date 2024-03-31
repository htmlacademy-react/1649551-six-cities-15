import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/types';
import { useState } from 'react';
import { Nullable } from 'vitest';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { offersActions } from '../../store/slices/offers';
import { CITIES } from '../../consts/consts';
import { selectCity, selectOffers } from '../../store/selectors/offers';
import Sort from '../../components/sort/sort';
import { SortOption } from '../../consts/consts';

function MainPage(): JSX.Element {

  const offers = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCity);

  const {setCity} = useActionCreators(offersActions);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);
  const isEmpty = currentOffers.length === 0;

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

  let sortedOffers = currentOffers;

  if(activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = [...currentOffers].sort((a,b) => a.price - b.price);
  }
  if(activeSort === SortOption.PriceHighToLow) {
    sortedOffers = [...currentOffers].sort((a,b) => b.price - a.price);
  }
  if(activeSort === SortOption.TopRatedFirst) {
    sortedOffers = [...currentOffers].sort((a,b) => b.rating - a.rating);
  }

  return(
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six Cities. Main page</title>
      </Helmet>
      <Header />
      <main className={classNames('page__main', 'page__main--index', { 'page__main--index-empty': isEmpty })}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city.name}>
                  <Link
                    to={'/'}
                    className={classNames('locations__item-link', 'tabs__item',{'tabs__item--active': currentCity === city.name })}
                    onClick={(evt) => {
                      evt.preventDefault();
                      setCity(city.name);
                    }}
                  >
                    <span>{city.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentOffers.length} place{currentOffers.length > 1 && 's'} to stay in {currentCity}
              </b>
              <Sort current={activeSort} setter={setActiveSort}/>
              <CardsList
                offers={sortedOffers}
                handleHover={handleHover}
                block='cities'
              />
            </section>
            <div className="cities__right-section">
              <Map
                activeOffer={activeOffer}
                city={currentOffers[0].city}
                offers={currentOffers}
                className='cities__map'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
