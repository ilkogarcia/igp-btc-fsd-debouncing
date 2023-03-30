/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { getMovieImg } from '../utils/getMovieImg'
import './MovieCard.css'

export function MovieCard ({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300)
  return (
    <li className='movieCard'>
      <Link to={'/movies/' + movie.id}>
        <img
          width={230}
          height={345}
          className='movieImage'
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  )
}
