import '../components/css/MovieCard.css'

const MovieCard = ({img, title, rating}) => {
  return (
    <div className="MovieCard">
        <img className ="imgSource" src={img}/>
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
    </div>
  )
}
export default MovieCard