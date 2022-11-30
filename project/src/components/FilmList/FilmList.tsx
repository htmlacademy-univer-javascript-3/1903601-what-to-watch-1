import SmallFilmCard from '../SmallFilmCard/SmallFilmCard';
import { film } from '../../types/film';

type FilmListProps ={
  films: film[]
}

function FilmList({films}:FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((filmData, id) => {
        const keyValue = `${id}-${filmData.name}`;
        return (
          <SmallFilmCard
            filmData={filmData}
            key={keyValue}
          />

        );
      })}
    </div>
  );
}

export default FilmList;
