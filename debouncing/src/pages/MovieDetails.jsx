/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Spinner } from '../components/Spinner'
import { getMovieImg } from '../utils/getMovieImg'
import { get } from '../utils/httpClient'
import './MovieDetails.css'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const { data: movie, isLoading } = useQuery(
    ['movieDetails', movieId],
    () => get('/movie/' + movieId)
  )

  if (isLoading) {
    return <Spinner />
  }

  const imageUrl = getMovieImg(movie.poster_path, 500)
  return (
    <div className='detailsContainer'>
      <img
        className='col movieImage'
        src={imageUrl}
        alt={movie.title}
      />
      <div className='col movieImage'>
        <p className='firstItem'>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{' '}
          { movie.genres.map((genre) => genre.name).join(', ') }
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  )
}

export default MovieDetails
