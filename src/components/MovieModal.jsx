import '../components/css/MovieModal.css'

const MovieModal = () => {
    return (
    <>
    <div id="festivalModal" class="modal">
    <div class="modal-content">
    <span class="close">&times;</span>
    <h1 id="festivalName"></h1>
    <img/>
    <p id="festivalDates"></p>
    <p id="festivalLocation"></p>
    <div id="artistLineup"></div>
    </div>
    </div>
    </> 
    )
}
export default MovieModal