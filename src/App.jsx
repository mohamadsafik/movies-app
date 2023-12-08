import { useState, useEffect } from "react";
import { ApiService } from "./api/Api_services";
import "./App.css";

function App() {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await ApiService.getPopularTVShows(1, 1)
      .then((response) => {
        setListMovie(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular TV shows:", error);
      });
  };

  const MovieListView = () => {
    return listMovie.map((show, i) => (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title">{show.name}</div>
        <img
          className="Movie-image"
          src={`${baseUrl}${show.poster_path}`}
          alt="poster"
        />
        <div className="Movie-date" key={show.id}>
          {show.first_air_date}
        </div>
        <div className="Movie-rate" key={show.id}>
          {show.vote_average}
        </div>
      </div>
    ));
  };

  const searchMovies = async (searchTerm) => {
    if (searchTerm == "") {
      getMovies();
    } else {
      ApiService.searchMovies(searchTerm)
        .then((response) => {
          setListMovie(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching popular TV shows:", error);
        });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Popular Movie</h1>
        <input
          type="text"
          placeholder="search judul"
          onChange={({ target }) => {
            searchMovies(target.value);
          }}
        />
        <div className="Movie-container">
          <MovieListView />
        </div>
      </header>
    </div>
  );
}
export default App;
