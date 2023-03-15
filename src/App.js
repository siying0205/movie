import React, { useEffect } from "react";
import "./App.css"
import MovieCard from "./components/MovieCard"
import Input from '@mui/joy/Input'
import SearchIcon from '@mui/icons-material/Search'

function App() {
  const [movies, setMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    searchMovie("hello");
  }, [])

  const searchMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=4a3b711b`

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  return (
    <div className="App">
      <h1 className="title">MovieLand</h1>
      <Input
        placeholder="Search for a movie…"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        endDecorator={
          <SearchIcon
            className="search-icon"
            onClick={() => { searchMovie(searchValue) }}
            sx={{
              color: '#d88769',
              fontSize: '30px',
            }}
          />
        }
        sx={{
          width: '60%',
          height: '50px',
          margin: '0 auto',
          color: '#fff',
          marginTop: '50px',
          backgroundColor: '#1f2123',
          borderRadius: '20px',
          border: 'none',
          boxShadow: '2px 3px 8px 0px rgba(0,0,0,0.75)',
        }}
      />

      {movies.length > 0
        ? (
          <div className="container">
            {movies.map((movie, index) => {
              return (<MovieCard movie={movie} key={index} />)
            })}

          </div>
        )
        : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }


    </div>
  );
}

export default App;
