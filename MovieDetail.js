function MovieDetail({ coverImage, title, genres, runtime, rating, summary }) {
  return(
    <div>
      <img src={coverImage} alt={title}/>
      <h2>{title}</h2>
      <ul>{genres.map((g) => (
        <li key={g}>{g}</li>
      ))}</ul>
      <p>{`Runtime: ${runtime}`}</p>
      <p>{`Rating: ${rating}`}</p>
      <p>{summary}</p>
    </div>
  )
}

export default MovieDetail;