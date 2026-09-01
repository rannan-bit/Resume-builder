import React from 'react'
import { IoIosDownload } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import Edit from '../components/Edit';
import Preview from '../components/Preview';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';




function ViewResume() {
  return (
    <div className='container'>
        <div className='row my-5'>
            <div className='col-lg-2'></div>
            <div className='col-lg-8'>
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
            <div>
                <Preview/>
            </div>
            </div>
        </div>

    </div>
  )
}

export default ViewResume