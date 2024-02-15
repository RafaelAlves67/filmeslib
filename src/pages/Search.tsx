import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Movies } from "../types/types";
import MovieCard from "../Components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css"

const Search = () => {


  const [search] = useSearchParams()

  const [movies, setMovies] = useState<Movies[]>([])
  const query = search.get("q");

  const getSearchedMovies = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json();

    setMovies(data.results);
}

useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    console.log(searchWithQueryURL)
    getSearchedMovies(searchWithQueryURL)
}, [query])



  return (
    <div className="container">
    <h2 className="title">Resultados para: <span className="query-text">{query}</span> </h2>
    <div className="movies-container">
      {movies.length === 0 && <p>Carregando...</p>}
      {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} showLink={true}/>)}
    </div>
    
  </div>
  )
}

export default Search