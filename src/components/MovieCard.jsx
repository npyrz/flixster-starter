import { useEffect, useState } from 'react'
import '../components/css/MovieCard.css'
import Modal from '../components/MovieModal'

const MovieCard = ({img, title, rating, release_date, overview, id}) => {
  const key = import.meta.env.VITE_API_KEY;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runtime, setRuntime] = useState([]);
  const [genre, setGenre] = useState([]);

  const search = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, search)
    .then(res => res.json())
    .then((data) => {
      setRuntime([data.runtime])
    })
    },[runtime]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, search)
    .then(res => res.json())
    .then((data) => {
      setGenre(data.genres)
    })
    },[genre]);
  
  const formatDate = (release_date) => {
    const options = { month: 'long', weekday: 'long', day: 'numeric' };
    return new Date(release_date).toLocaleDateString(undefined, options);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="MovieCard">
        <img className ="imgSource" src={img} onClick={handleOpen} alt={title}/>
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <h1>{title}</h1>
          <img src={img} alt={title}/>
          <h3>Release Date: {formatDate(release_date)}</h3>
          <p>Genres: {genre.map(g => g.name).join(', ')}</p>
          <p>Runtime: {Math.floor(parseInt(runtime)/60)} hour(s) {parseInt(runtime)%60} minutes</p>
          <p>{overview}</p>
        </Modal>
    </div>
  )
}
export default MovieCard