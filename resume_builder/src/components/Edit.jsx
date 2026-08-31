import React from 'react'
import { MdEditDocument } from 'react-icons/md';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button onClick={handleOpen} className='btn fs-1 text-primary'><MdEditDocument /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <h3>Personal Details</h3>
                            <div>
                                <div>
                                    <TextField id="standard-basic" label="Full Name" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Job Title" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Location" variant="standard" />
                                </div>



                            </div>
                        </div>
                        <div>
                            <h3>Contact Details</h3>
                            <div>
                                <div>
                                    <TextField id="standard-basic" label="Email" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Phone" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Github Link" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="LinkedIn Link" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Portfolio Link" variant="standard" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Education Details</h3>
                            <div>
                                <div>
                                    <TextField id="standard-basic" label="Course" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="College" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="University" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Passout Year" variant="standard" />
                                </div>

                            </div>
                        </div>
                        <div>
                            <h3>Professional Details</h3>
                            <div>
                                <div>
                                    <TextField id="standard-basic" label="Job or Internship" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Company Name" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Company Location" variant="standard" />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Duration" variant="standard" />
                                </div>

                            </div>
                        </div>
                        <div className='mt-3'>
                            <h3>Skills</h3>
                            <div className='my-3 d-flex align-items-center'>
                                <TextField sx={{ width: '500px' }} id="outlined-basic" label="Add Skills" variant="outlined" className='w-100' />
                                <Button variant='contained' className='ms-3'>ADD</Button>


                            </div>
                            

                            <h5>Added Skills:</h5>
                            <div className='d-flex my-3 flex-wrap justify-content-between'>
                                <span className='btn btn-dark m-1 d-flex align-items-center'>Skill <button className='btn text-light'>x</button></span>
                            </div>

                        </div>
                        <div>
                            <h3>Professional Summary</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField id="standard-basic" label="Write a short summary of yourself" variant="standard" className='w-100' />
                                </div>

                            </div>
                        </div>
                    </Typography>
                    <Button>UPDATE</Button>
                </Box>
            </Modal>

        </div>
    )
}

export default Edit