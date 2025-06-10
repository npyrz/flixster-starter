import '../components/css/MovieCard.css'

const MovieCard = ({img, title, rating}) => {
  return (
    <div className="MovieCard">
        <img className ="imgSource" src={img}/>
        <h1>{title}</h1>
        <p>{rating}</p>
    </div>
  )
}
export default MovieCard