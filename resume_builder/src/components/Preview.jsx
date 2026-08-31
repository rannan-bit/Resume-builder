import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoIosDownload } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import Edit from './Edit';

function Preview() {
    return (
        <div>
            <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* download */}
                <button className='btn fs-1 text-danger'><IoIosDownload /> </button>
                {/* edit */}
                <Edit />

                {/* history */}
                <Link to={'/history'} className='fs-2 text-sucess ms-2'><FaHistory /> </Link>

                {/* back */}
                <Link to={'/form'} className='fs-1 text-primary ms-3'><TbPlayerTrackPrevFilled /> </Link>

            </Stack>
            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                    <h2>Name</h2>
                    <h6>Job Title</h6>

                    <p><span>Location</span>||<span>Email</span>||<span>Phone</span></p>

                    <p><Link>Github</Link>|<Link>Linkedin</Link></p>

                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Summmary</Divider>

                    <p>User Summary</p>

                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Eduction</Divider>
                    <h6>User Education</h6>
                    <p><span>college</span>||<span>University</span>||<span>Passout Year</span></p>

                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Proffesional Experience</Divider>
                    <h6>User Job</h6>
                    <p><span>Company</span>||<span>Location</span>||<span>Duration</span></p>


                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Skills</Divider>
                    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: '8px' }}>
                        <Button variant="contained">Contained</Button>

                    </Stack>

                </Paper>
            </Box>
        </div>
    )
}

export default Preview