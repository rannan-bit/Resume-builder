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



function Preview({resumeData}) {
    console.log(resumeData);
    
    return (
        <div>
            
            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                    <h2>{resumeData.fullName}</h2>
                    <h6>{resumeData.job}</h6>

                    <p><span>{resumeData.location}</span>||<span>{resumeData.email}</span>||<span>{resumeData.phone}</span></p>

                    <p><Link>{resumeData.github}</Link>|<Link>{resumeData.linkedin}</Link></p>

                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Summmary</Divider>

                    <p>{resumeData.summary}</p>

                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Eduction</Divider>
                    <h6>User Education</h6>
                    <p><span>{resumeData.degree}</span>||<span>{resumeData.university}</span>||<span>{resumeData.passout}</span></p>

                    


                    <Divider sx={{ fontSize: '23px', fontWeight: 'Bold' }}>Skills</Divider>
                    <Stack direction="row"
                     sx={{ flexWrap: 'wrap', gap: '8px' }}>
                        {resumeData.skills.map(skill=>(
                            <Button variant='contained'>{skill}</Button>
                        ))}

                    </Stack>

                </Paper>
            </Box>
        </div>
    )
}

export default Preview