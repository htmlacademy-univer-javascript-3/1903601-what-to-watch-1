import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FilmList from '../../components/FilmList/FilmList';
import GenresList from '../../components/GenresList/GenresList';
import Logo from '../../components/Logo/Logo';
import ShowMoreButton from '../../components/ui/ShowMoreButton/ShowMoreButton';
import { AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { resetNumberFilmsShow, viewGenreFilms } from '../../store/action';
import { film } from '../../types/film';

type StartScreenProps = {
  films: film[]
}

function StartScreen({films}:StartScreenProps) {
  const navigate = useNavigate();
  const filmData = films[0];
  const dispatch = useAppDispatch();
  const genre = useAppSelector((state) => state.genre);
  const genreFilms = useAppSelector((state) => state.films);
  const numberFilmsShow = useAppSelector((state)=>state.numberFilmsShow);

  useEffect(() => {
    dispatch(viewGenreFilms());
  },[genre]);

  useEffect(() => {
    dispatch(resetNumberFilmsShow());
  },[]);


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmData.backgroundImage}
            alt={filmData.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width={63}
                  height={63}
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link to='#' className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={filmData.posterImage}
                alt={filmData.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={()=>navigate('/player/0')}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={()=>navigate(AppRoute.MyList)}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList/>
          <FilmList films={genreFilms} numberFilmsShow={numberFilmsShow}/>
          {numberFilmsShow <= genreFilms.length && <ShowMoreButton/>}
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to='#' className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default StartScreen;
