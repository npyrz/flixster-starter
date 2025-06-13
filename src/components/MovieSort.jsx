import '../components/css/MovieSort.css'

const MovieSort = ( { onSort, sort } ) => {
    const sortChange = (e) => {
        onSort(e.target.value);
    }
    return (
    <div className="MovieSort">
        <form>
            <select id='selectSort' onChange={sortChange} value={sort}>
                <option value='popular'>Popularity Descending</option>
                <option value='release'>Release Date Descending</option>
                <option value='rating'>Rating Descending</option>
                <option value='alpha'>Alphabetically Descending</option>
            </select>   
        </form>
    </div>
    )
}

export default MovieSort