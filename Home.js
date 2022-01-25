import Movie from "../components/Movie";
import { Fragment, useEffect, useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  },[])
  
  return(
  <div id="container">
    {loading ? <h1>Loading...</h1> :
    <Fragment>
      {movies.map((movie) => (
        <Movie 
          key={movie.id}
          id={movie.id}
          coverImage={movie.medium_cover_image} 
          title={movie.title}
          year={movie.year}
          summary={movie.summary}
        />
      ))}
    </Fragment>
    }
  </div>
  );
}

export default Home;