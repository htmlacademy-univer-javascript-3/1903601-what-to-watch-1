import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type FilmNavListProps = {
  FilmId: number
  getType: (type: 'overview'|'details'|'reviews') => void
}

function FilmNavList({FilmId, getType}:FilmNavListProps) {
  const [activeItem, setActiveItem] = useState([true, false, false]);

  return (
    <ul className="film-nav__list">
      <li className={cn('film-nav__item', {'film-nav__item--active':activeItem[0]})} onClick={()=>{setActiveItem([true, false, false]);}}>
        <Link to={`/films/${FilmId}`} className="film-nav__link" onClick={()=>{getType('overview');}}>Overview</Link>
      </li>
      <li className={cn('film-nav__item', {'film-nav__item--active':activeItem[1]})} onClick={()=>{setActiveItem([false, true, false]);}}>
        <Link to={`/films/${FilmId}/details`} className="film-nav__link" onClick={()=>{getType('details');}}>Details</Link>
      </li>
      <li className={cn('film-nav__item', {'film-nav__item--active':activeItem[2]})} onClick={()=>{setActiveItem([false, false, true]);}}>
        <Link to={`/films/${FilmId}/reviews`} className="film-nav__link" onClick={()=>{getType('reviews');}}>Reviews</Link>
      </li>
    </ul>
  );
}

export default FilmNavList;
