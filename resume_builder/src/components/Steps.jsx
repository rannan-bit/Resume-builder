import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const steps = ['Basic Information', 'Contact Details', 'Education Details','Skills & Certifications', 'Review & Submit'];

function Steps() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const previousActiveStepRef = React.useRef(activeStep);
    const resetButtonRef = React.useRef(null);
    const nextButtonRef = React.useRef(null);

    //render the content curresponding to array index

    const renderStepArrayContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h3>Personal Details</h3>
                    <div>
                        <div>
                            <TextField id="standard-basic" label="Full Name" variant="standard" className='w-100'/>
                        </div>
                        <div>
                            {/* <TextField id="standard-basic" label="Job Title" variant="standard" /> */}
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className='w-100'>
                                <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Location" variant="standard" className='w-100' />
                        </div>



                    </div>
                </div>
            )
            case 1: return (
                <div>
                    <h3>Contact Details</h3>
                    <div>
                        <div>
                            <TextField id="standard-basic" label="Email" variant="standard" className='w-100'/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Phone" variant="standard" className='w-100'/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Github Link" variant="standard" className='w-100'/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="LinkedIn Link" variant="standard" className='w-100'/>
                        </div>
                        
                    </div>
                </div>
            )
            case 2: return (
                <div>
                    <h3>Education Details</h3>
                    <div>
                        <div>
                            <TextField id="standard-basic" label="Bachelor's Degree" variant="standard" className='w-100'/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="College/University Name" variant="standard" className='w-100'/>
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Passout Year" variant="standard" className='w-100'/>
                        </div>

                    </div>
                </div>
            )

            case 3: return (
                <div className='mt-3'>
                    <h3>Skills</h3>
                    <p>Our AI will generate skills & summary according to your job role. Click the <b>AI SKILL & SUMMARY</b> button to proceed</p>

                </div>
            )
            default :return null
        }
    }




    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                   
                    
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button  ref={resetButtonRef}>
                            FINISH
                        </Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {/*view of each step */}
                    <Box>
                        {renderStepArrayContent(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        
                        {
                            activeStep==steps.length-2?
                            <Button>Generate Skill & Summary</Button>
                            :
                            <Button onClick={handleNext}>Next</Button>
                        }
                    </Box>
                </React.Fragment>
            )}
        </Box>
    )
}

export default Steps