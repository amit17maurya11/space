import React from 'react'
import imgg from '../../src/undraw_launch_day_4e04.svg'
function Section1() {

  return (
    <>
 <div className="container" style={{height:"100vh"}}>
  <div className="row d-flex align-items-center">
    <div className="col-6">
      <h2  className='letter'> Welcome to react Project </h2>
      <h4 className='letter'> Recent Launch</h4>
      <button type="button" class="btn btn-light btn-lg"><a href='https://www.spacex.com/' target='_blank'>Get Info About Space</a> </button>
    </div>
    <div className="col-6">
      <img src={imgg}/>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Section1