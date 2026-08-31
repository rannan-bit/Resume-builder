import React from 'react'
import Paper from '@mui/material/Paper';
import { Box, Link } from '@mui/material';
import { MdDelete } from 'react-icons/md';





function History() {
  return (
    <div>
      <h1 className='text-center text-danger' style={{marginTop:'80px'}}>Download Resumes</h1>
      <Link to={'/'} style={{marginTop:'-40px', marginRight:'20px', textDecoration:'none'}} className='btn btn-primary float-end text-light'>Back</Link>
      <Box component='section' className="container-fluid">
        <div className='row'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
              <div className='d-flex align-items-center justify-content-between'>
                <h5>Review At:31/08/2026</h5>
                <button className='btn text-danger fs-4'><MdDelete/></button>

              </div>
              <div>
                {/*preview*/}
                <img src="" alt="" />
              </div>

            </Paper>

          </div>

        </div>

      </Box>
      <Paper>

      </Paper>
    </div>
  )
}

export default History