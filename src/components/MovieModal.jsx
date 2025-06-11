import '../components/css/MovieModal.css'

const MovieModal = ({ show, movie, onClose }) => {
    console.log("TEST 1")  
    if (!show) return null;
    return (
    <div id="festivalModal" className="modal" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <span className="close" onClick={onClose}>&times;</span>
    <h1>{movie.title}</h1>
    <img src={movie.img}/>
    <p>{movie.rating}</p>
    </div>
    </div>
    )
}
export default MovieModal