import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import PrincipalMenu from '../components/PrincipalMenu'
import Monitores from '../pages/Monitores'
import Monitorias from '../pages/Monitorias'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<PrincipalMenu />} />
          <Route path="/monitores" element={<Monitores />} />
          <Route path="/monitorias" element={<Monitorias />} />
    
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router