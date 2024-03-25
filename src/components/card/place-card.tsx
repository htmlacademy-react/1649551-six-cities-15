import { Link } from 'react-router-dom';
import { OfferType } from '../../types/types';
import { AppRoute } from '../../consts/consts';

type PlaceCardProps = {
  offer: OfferType;
  handleHover: (offer?: OfferType) => void;
  block?: string;
}

function PlaceCard({offer, handleHover,block}: PlaceCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type} = offer;

  const handleMouseOn = () => {
    handleHover(offer);
  };

  const handleMouseOff = () => {
    handleHover();
  };

  return(
    <Link to={`${AppRoute.Offer}/${offer.id}`}>
      <article
        className={`${block}__card place-card`}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOff}
      >
        {isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img style={{width: '260px', height: '200px'}}
            className="place-card__image"
            src={previewImage}
            alt="Place image"
          />
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
              <span style={{width: '80%'}}>{rating}</span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to="#">{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

export default PlaceCard;
