import '../components/css/MovieCard.css'

const MovieCard = () => {
  return (
    <div className="MovieCard">
        <img className ="imgSource" src="https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj"  />
        <h1>Title</h1>
        <p>Rating</p>
    </div>
  )
}
export default MovieCard