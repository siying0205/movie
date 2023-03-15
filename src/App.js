import React from "react";
import "./App.css"
import Search from "./components/Search"
import MovieCard from "./components/MovieCard"

function App() {

  return (
    <div className="App">
      <h1 className="title">MovieLand</h1>
      <Search />
      <MovieCard />


    </div>
  );
}

export default App;
