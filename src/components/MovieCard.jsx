import { useEffect, useState } from 'react'
import '../components/css/MovieCard.css'
import Modal from '../components/MovieModal'

const MovieCard = ({img, title, rating, release_date, overview, id, modalImg, toggleFav, fav, toggleWatch, watched }) => {
  const key = import.meta.env.VITE_API_KEY;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runtime, setRuntime] = useState([]);
  const [genre, setGenre] = useState([]);
  const [url, setUrl] = useState([]);

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

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, search)
    .then(res => res.json())
    .then((data) => {
      setUrl(data.results[0].key)
    })
    },[url]);
  
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
  
  const handleDivLike = (event) => {
    event.stopPropagation();
    toggleFav({img, title, rating, release_date, overview, id, modalImg})
  }

  const handleDivWatch = (event) => {
    event.stopPropagation();
    toggleWatch({img, title, rating, release_date, overview, id, modalImg})
  }

  return (
    <div className="MovieCard">
      <div className="movieCardClick" onClick={handleOpen}>
        <img className ="imgSource" src={img} alt={title}/>
        <h3>{title}</h3>
        <p><b>Rating:</b> {rating}</p>
          <button className='likeButton' onClick={handleDivLike}>
            <i className={`fa fa-star`} style={{color: fav ? 'red' : 'white'}}></i>
          </button>
          <button className='watchedButton' onClick={handleDivWatch}>
            <i className={`fa fa-video-camera`} style={{color: watched ? 'red' : 'white'}}></i>
          </button>
      </div>
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <h3>{title}</h3>
          <img src={modalImg} alt={title} className='modalImg'/>
          <p><b>Release Date:</b> {formatDate(release_date)}</p>
          <p><b>Rating:</b> {rating}</p>
          <p><b>Runtime:</b> {runtime} minutes</p>
          <p>{overview}</p>
          <iframe src={`https://www.youtube.com/embed/${url}`} className='modalVideo'></iframe>
        </Modal>
    </div>
  )
}
export default MovieCard