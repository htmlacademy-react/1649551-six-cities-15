import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-offers/favorites-list';

function FavoritesPage(): JSX.Element {
  return(
    <div className="page">
      <Helmet>
        <title>Six Cities. Favourite offers</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <FavoritesList />
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
