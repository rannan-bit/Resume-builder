import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import ResumeGenerator from './pages/ResumeGenerator'
import History from './pages/History'
import UserForm from './pages/UserForm'
import Pnf from './pages/Pnf'
import ViewResume from './pages/ViewResume'


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/resume' element={<ResumeGenerator/>}/>
      <Route path='/form' element={<UserForm/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/resume/:id/view' element={<ViewResume/>}></Route>

      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App