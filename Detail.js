import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail"

function Detail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  },[]);

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <MovieDetail
        coverImage={movieDetail.large_cover_image}
        title={movieDetail.title_long}
        genres={movieDetail.genres}
        runtime={movieDetail.runtime}
        rating={movieDetail.rating}
        summary={movieDetail.description_full}
      />}
    </div>
  );
}

export default Detail;