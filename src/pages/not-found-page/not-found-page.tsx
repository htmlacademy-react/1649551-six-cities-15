import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';

const variants = {
  page: {text: 'Page Not Found', o: '😵'},
  offer: {text: 'We have no offers with that ID', o: '🥺'}
};

type NotFoundPageProps = {
  type: keyof typeof variants;
}

function NotFoundPage({type}: NotFoundPageProps): JSX.Element {

  return(
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <Header />
      <main className='page__main' style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        padding: '52px',
        alignItems: 'center'
      }}
      >
        <b style={{
          display: 'block',
          marginBottom: '24px',
          fontSize: '3em',
        }}
        >
          {`4${variants[type].o}4`}
        </b>
        <p style={{fontSize: '2em'}}>{`Ooops! ${variants[type].text}`}</p>
        <div style={{textAlign:'center', fontSize:'25px', marginTop:'30px'}}>
          <Link to='/'>
            Return to main page
          </Link>
        </div>
      </main>
      <footer className="footer container">
        <Link to='/' className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
}

export default NotFoundPage;
