import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div>
      <div style={{ height: '60vh' }} className='d-flex justify-content-center align-items-center'>
        <img src="https://i.pinimg.com/originals/79/b3/03/79b30352d4a90ff977bb0eeb5ecfddc5.gif" alt="" />


      </div>
      <div>
        <h5 className='text-center'>Sorry we couldn't find the page!!</h5>
      </div>
      <div className='d-flex justify-content-center'>
        <Link to={'/landing'} className='btn btn-dark text-center my-3'>Back to Home</Link>
      </div>
    </div>
  )
}

export default Pnf