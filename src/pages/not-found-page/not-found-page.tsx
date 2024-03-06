import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return(
    <>
      <Header />
      <h1 style={{textAlign:'center'}}>404 Not Found</h1>
      <div style={{width:'100%', height:'100%', display:'flex',justifyContent:'center', alignItems:'center'}}>
        <img src="../public/img/not_found.jpg" alt="not found" style={{width:'30%', marginTop:'100px'}} />
      </div>
      <div style={{textAlign:'center', fontSize:'25px', marginTop:'30px'}}>
        <Link to='/'>
          Return to main page
        </Link>
      </div>
      <footer className="footer container">
        <Link to='/' className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
}

export default NotFoundPage;
