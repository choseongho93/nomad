import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./ClassApp.css";

class ClassApp extends React.Component {
  state = {
    isLoding: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoding: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading
          ? (<div>
            <span class="loader_text">Loading...</span>
          </div>
          ) : (
            <div class="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default ClassApp;
