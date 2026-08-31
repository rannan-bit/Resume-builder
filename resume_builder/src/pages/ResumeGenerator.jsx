import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h2 className='text-center' style={{marginTop:'100px'}}>Create a job-winning Resume in minutes</h2>
      <div style={{height:'60vh'}} className='row align-items-center justify-content-center'>

        <div className="col-4 border shadow p-5 text-center">
          <IoDocumentText className='fs-1 mb-3 text-primary'/>
          <h4>Add Your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>

        </div>
        <div className="col-1">

        </div>
        <div className="col-4 border shadow p-5 text-center">
          <IoIosDownload className='fs-1 mb-3 text-danger'/>
          <h4>Download Your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>


        </div>

      </div>
      <div className='text-center'>
        <Link to={'/form'} className='btn btn-dark'>LET'S START</Link>
      </div>
      
    </div>
  )
}

export default ResumeGenerator