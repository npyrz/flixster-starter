import '../components/css/MovieModal.css'

const MovieModal = ( {isOpen, onClose, children} ) => {
    if (!isOpen) return null;
    return (
    <div className="modal-overlay">
        <div className="modal-content">
            <button className="exitButton" onClick={onClose}><i className="fa fa-close"></i></button>  
            {children}
        </div>
    </div>
    )
}

export default MovieModal       