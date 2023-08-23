import React, { useState, useEffect } from 'react';
import { get } from "../utils/httpClient";

function GenreFilter({ onSelectGenre }) {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/genre/movie/list").then((data) => {
      setGenres(data.genres);
      setIsLoading(false);
    });
  }, []);

  const handleGenreSelect = (genreId) => {
    onSelectGenre(genreId);
  };

  if (isLoading) {
    return <p>Loading genres...</p>;
  }

  return (
    <div>
      <h2>Elige el género que deseas ver:</h2>
      <select onChange={(e) => handleGenreSelect(e.target.value)}>
        <option value="">Todos los géneros</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
