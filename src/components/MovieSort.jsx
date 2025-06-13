import '../components/css/MovieSort.css'

const MovieSort = ( { onSort, sort } ) => {
    const sortChange = (e) => {
        onSort(e.target.value);
    }
    return (
    <div className="MovieSort">
        <form>
            <select id='selectSort' onChange={sortChange} value={sort}>
                <option value='popular'>Popularity</option>
                <option value='release'>Release Date Chronologically</option>
                <option value='rating'>Vote Average</option>
                <option value='alpha'>Title (A-Z)</option>
            </select>   
        </form>
    </div>
    )
}

export default MovieSort