import apiService from "../api/apiService";


//api call for add resume, called steps component
export const addResumeAPI=async(reqBody)=>{
    return await apiService("POST",'/allResumes',reqBody)
}

