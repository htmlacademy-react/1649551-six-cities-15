import { Link } from 'react-router-dom';
import { CitiesType } from '../../types/types';
import { CITIES } from '../../consts/consts';

type CitiesItemProps = {
  cities: CitiesType;
  activeClass?: string;
}

function CitiesItem({cities, activeClass = 'tabs__item--active'}:CitiesItemProps):JSX.Element {
  const {isActive, name} = cities;

  return(
    <li className="locations__item" >
      <Link
        to={'/'}
        className={`locations__item-link tabs__item ${isActive ? activeClass : ''}`}
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(setCity(city.name));
        }}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

function CitiesList(): JSX.Element {

  const citiesItems = CITIES.map((city) =>
    <CitiesItem key={city.name} cities={city} />
  );

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citiesItems}
      </ul>
    </section>
  );
}

export default CitiesList;
