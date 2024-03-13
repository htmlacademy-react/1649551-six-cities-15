import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/types';
import FavoritesList from '../../components/favorites-offers/favorites-list';

type FavoritesPageProps = {
  offers: OfferType[];
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return(
    <div className="page">
      <Helmet>
        <title>Six Cities. Favourite offers</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to='/' className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
