import '../components/css/MovieCard.css'

const MovieCard = ({img, title, rating, onClick}) => {
  return (
    <>
    <div className="MovieCard" onClick={onClick}>
        <img className ="imgSource" src={img}/>
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
    </div>
    </>
  )
}
export default MovieCard