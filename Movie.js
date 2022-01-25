import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Movie.css";

function Movie({id, coverImage, title, year, summary }) {
  return(
    <div id="movie">
      <img id="MainImg" src={coverImage} alt={title}/>
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{year}</p>
      <p>{summary}</p>
    </div>
  )
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  year: propTypes.number.isRequired
};

export default Movie;