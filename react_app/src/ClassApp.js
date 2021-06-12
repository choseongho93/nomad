import React from "react";
import axios from "axios";

class ClassApp extends React.Component {
  state = {
    isLoding: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount () {
    this.getMovies();
  }

  render() {
    const {isLoding} = this.state;
    return <div>{isLoding ? "Loding..." : "We are Ready"}</div>;
  }
}

export default ClassApp;
