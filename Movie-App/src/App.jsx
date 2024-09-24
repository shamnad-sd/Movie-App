import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "./assets/search.svg";
import "./App.css";


const App = () => {

  const api_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=ebec04ab'

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const SearchMovie = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

  }
  useEffect(()=>{
    SearchMovie("race");
  },[])

  return (
    <div className="app">
      <h1>Movie World</h1>

      <div className="search">
        <input value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value) }} placeholder="Search for movies" />
        <img src={SearchIcon} onClick={() => { SearchMovie(searchTerm) }} alt="search" />
      </div>
      {movies?.length >0 ?(
        <div className="container">
        {movies.map((movie) => (
          <MovieCard  state={movie} />
        ))}

      </div>
      ):(
        <div className="empty">
          <h2>No Movie's Found</h2>
        </div>
      )}
      
    </div>
  );
};

export default App;
