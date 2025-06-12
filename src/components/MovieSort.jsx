import '../components/css/MovieSort.css'

const MovieSort = ( { onSort } ) => {
    const sortChange = (e) => {
        onSort(e.target.value);
    }
    return (
    <div className="MovieSort">
        <form>
            <select id='selectSort' onChange={sortChange}>
                <option value='popular'>Popularity Descending</option>
                <option value='release'>Release Date Descending</option>
                <option value='rating'>Rating Descending</option>
            </select>   
        </form>
    </div>
    )
}

export default MovieSort