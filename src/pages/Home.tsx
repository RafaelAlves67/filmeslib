import {useState, useEffect} from "react"

import MovieCard from "../Components/MovieCard"
import { Movies } from "../types/types";

import "./MovieGrid.css"

const Home = () => {

  // Chaves API
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(moviesURL, apiKey);

  const [topMovies, setTopMovies] = useState<Movies[]>([]);
  
  const getTopRatedMovies = async (url: string) => {
      const res = await fetch(url)
      const data = await res.json();

      setTopMovies(data.results);
  }

  useEffect(() => {
      const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

      getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes: </h2>
      <div className="movies-container">
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} showLink={true}/>)}
      </div>
      
    </div>
  )
}

export default Home