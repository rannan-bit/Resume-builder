import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <section style={{height:'500px',backgroundImage:"url('/meeting.jpg')",backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
      <div className='row pt-5'>
        <div className='col-12 col-md-4'></div>
        <div className='col-12 col-md-4'>
          <div className='text-center mt-5 border box-shadow p-5 rounded' style={{backgroundColor:'rgb(128,128,128,0.5)'}}>
            <h1 style={{fontFamily:'Dancing Script'}}>
              Designed to get hired.</h1>
              <h5>Your skills, Your story, your next job - all in one</h5>
              {/* <a className='btn btn-dark' href="/resume">MAKE YOUR RESUME</a> */}
              <Link to={'/resume'} className='btn btn-dark'>MAKE YOUR RESUME</Link>

          </div>
        </div>

      </div>
      <div></div>

      </section>
      {/*tools*/}
      <section className='m-5'>
        <h1 className='text-center' style={{fontFamily:'Dancing Script'}}>Tools</h1>
        <div className='row mt-5 align-items-center '>
          <div className='col-md-6'>
            <h3>Resume</h3>
            <p>Create unlimited new resumes and easily edit them afterwards</p>
            <h3>Cover Letters</h3>
            <p>Easily write professional cover letters.</p>
            <h3>Jobs</h3>
            <p>Automatically receive new and relevant job postings.</p>
            <h3>Applications</h3>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className='col-md-6'>
            <img src="/resume.png" alt="" className='img-fluid w-75'/>
          </div>

        </div>
        <div style={{height:'500px',backgroundImage:"url('/meeting2.jpg')",backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>

        </div>

      </section>
      {/*testimony*/}
      <section className='m-5'>
        <h1 className='text-center' style={{fontFamily:'Dancing Script'}}>Testimony</h1>
        <div className='row mt-5 align-items-center'>
          <div className='col-md-6 '>
            <h3>Trusted by professionals worldwide</h3>
            <p className='mt-5'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results. <br /><br />
            In fact, users who used LiveCareer reported getting hired an average of 48 days faster. <br /><br />
            Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-3'>
                <div className='mt-5'>
                  <img src="/grid1.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid1.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid1.png" alt="" />
                </div>
              </div>

              <div className='col-3'>
                <div className='mt-5'>
                  <img src="/grid2.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid2.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid2.png" alt="" />
                </div>
              </div>

              <div className='col-3'>
                <div className='mt-5'>
                  <img src="/grid3.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid3.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid3.png" alt="" />
                </div>
              </div>

              <div className='col-3'>
                <div className='mt-5'>
                  <img src="/grid7.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid7.png" alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/grid7.png" alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Landing