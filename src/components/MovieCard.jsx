import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import error404 from "../error404.avif"

export function MovieCard({ movie }) {
  const imageUrl = movie.poster_path ?
  "https://image.tmdb.org/t/p/w300" + movie.poster_path
  : error404;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}