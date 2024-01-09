import React from 'react'
import "./Dashboard.css"
import { useData } from '../DataContext'; 
import ResponsiveTopNav from '../NavBar/NavBar';
import Sidebar from "../SideBar/sidebar"
const Dashboard = () => {
  const { data } = useData();
  return (
    <div className='dashbaord'>
    <ResponsiveTopNav />
    <div className='dashboard-body'>
      <Sidebar />
    </div>
    </div>
  )
}

export default Dashboard
