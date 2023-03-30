/* eslint-disable react/react-in-jsx-scope */
import { MovieCard } from './MovieCard'
import { Spinner } from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Empty } from './Empty'
import { useMovies } from '../hooks/useMovies'
import './MoviesGrid.css'

export function MoviesGrid ({ search }) {
  const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies(search)

  if (!isLoading && movies.length === 0) {
    return <Empty />
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasNextPage || isLoading}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <ul className='moviesGrid'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}
