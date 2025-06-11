import { useState } from 'react'
import '../components/css/MovieCard.css'
import Modal from '../components/MovieModal'

const MovieCard = ({img, title, rating, release_date, overview}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

const formatDate = (release_date) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
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
        <img className ="imgSource" src={img} onClick={handleOpen}/>
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <img src={img}/>
          <h2>{title}</h2>
          <h3>Release Date: {formatDate(release_date)}</h3>
          <p>Genres:</p>
          <p>{overview}</p>
        </Modal>
    </div>
  )
}
export default MovieCard