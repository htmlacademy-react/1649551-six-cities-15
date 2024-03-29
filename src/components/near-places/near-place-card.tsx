import { Link } from 'react-router-dom';
import { OfferType } from '../../types/types';

type NearPlaceCardProps = {
  nearOffer: OfferType;
}

function NearPlaceCard({nearOffer}: NearPlaceCardProps): JSX.Element {

  const{isPremium, price, images, title, type} = nearOffer;

  return(
    <article className="near-places__card place-card">
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default NearPlaceCard;
