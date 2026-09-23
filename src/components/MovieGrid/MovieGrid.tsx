import type { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  if (!movies.length) {
    return null;
  }

  return (
    <ul className={css.grid}>
      {movies.map((movie) => {
        const imageUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : 'https://placehold.co/500x750/111827/94a3b8?text=No+Image';

        return (
          <li key={movie.id} className={css.item}>
            <button
              type="button"
              className={css.card}
              onClick={() => onSelect(movie)}
            >
              <img
                src={imageUrl}
                alt={movie.title}
                className={css.image}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
