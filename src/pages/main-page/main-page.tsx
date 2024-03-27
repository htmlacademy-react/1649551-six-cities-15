import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/types';
import { useState } from 'react';
import { Nullable } from 'vitest';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { offersActions } from '../../store/slices/offers';
import { CITIES } from '../../consts/consts';
import { selectCity, selectOffers } from '../../store/selectors/offers';

type MainPage = {
 offers: OfferType[];
}

function MainPage(): JSX.Element {

  const offers = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectCity);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);
  const isEmpty = currentOffers.length === 0;

  const dispatch = useAppDispatch();

  const [activeOffer, setActiveOffer] = useState<Nullable<OfferType>>(null);

  const handleHover = (offer?: OfferType) => {
    setActiveOffer(offer || null);
  };

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
                      dispatch(offersActions.setCity(city.name));
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
              <b className="places__found">{offers.length} places to stay in {offers[2].city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsList
                offers={offers}
                handleHover={handleHover}
                block='cities'
              />
            </section>
            <div className="cities__right-section">
              <Map
                activeOffer={activeOffer}
                city={offers[0].city}
                offers={offers}
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
