import React from 'react'
import Navi from './Navi'
import JobAdvertisements from '../pages/JobAdvertisements'
import EmployeeCVs from '../pages/EmployeeCVs'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import EmployeeSignUp from '../pages/EmployeeSignUp'
import SignUpHandler from '../pages/SignUpHandler'


export default function Dashboard() {
  return (
    <div>

      <Navi />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path="/jobadvertisements" Component={JobAdvertisements} />
        <Route path="/employeecvs" Component={EmployeeCVs} />
        <Route path="/signup" Component={SignUpHandler} />
      </Routes>
    </div>
  )
}
