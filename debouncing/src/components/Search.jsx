/* eslint-disable react/react-in-jsx-scope */
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import './Search.css'

export function Search () {
  const [query, setQuery] = useSearchParams()
  const search = query.get('search')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className='searchContainer' onSubmit={handleSubmit}>
      <div className='searchBox'>
        <input
          className='searchInput'
          type="text"
          value={search ?? ''}
          autoFocus
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value

            setQuery({ search: value })
            // navigate("/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className='searchButton' />
      </div>
    </form>
  )
}
