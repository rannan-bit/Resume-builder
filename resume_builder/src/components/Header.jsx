import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



function Header() {
  const about="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <img src="/logo.png" alt="" width={68} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              rBuilder
            </Typography>
            <Tooltip title={about}>
                <button color="inherit" className='btn'>ABOUT US</button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </>

  )
}

export default Header