import '../components/css/MovieSort.css'

const MovieSort = () => {
    return (
    <div className="MovieSort">
    <form action=''>
    <select id='selectSort'>
    <option value='popular'>Popularity Descending</option>
    <option value='release'>Release Date Descending</option>
    <option value='rating'>Rating Descending</option>
    </select>   
    </form>

    
    </div>
    )
}

export default MovieSort