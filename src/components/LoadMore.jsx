import '../components/css/LoadMore.css'

const LoadMore = ( {onClick} ) => {
    return (
    <div className="LoadMore">
        <button className="loadMoreButton" onClick={onClick}>Load More...</button>
    </div>
    )
}

export default LoadMore