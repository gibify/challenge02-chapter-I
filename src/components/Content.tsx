import { useState, useEffect} from 'react';

import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';

interface MoviesProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContenProps {
  movies: MoviesProps[];
  title: string;
}

export function Content({ movies, title}: ContenProps) {
  return (
    <div className="container">
        <header>
          <span 
          className="category">
            Categoria:<span>{title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} 
              />
            ))}
          </div>
        </main>
      </div>
  )
}