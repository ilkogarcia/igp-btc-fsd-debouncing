/* eslint-disable react/react-in-jsx-scope */
import { FaSpinner } from 'react-icons/fa'
import './Spinner.css'

export const Spinner = () => {
  return (
    <div className='spinner'>
      <FaSpinner className='spinning' size={60} />
    </div>
  )
}

export default Spinner
