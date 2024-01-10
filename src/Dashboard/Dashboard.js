import React from 'react'
import "./Dashboard.css"
import { useData } from '../DataContext'; 
import ResponsiveTopNav from '../NavBar/NavBar';
import Sidebar from "../SideBar/sidebar"
import Maincontent from '../Maincontent/maincontent';
const Dashboard = () => {
  const { data } = useData();
  return (
    <div className='dashbaord'>
    <ResponsiveTopNav />
    <div className='dashboard-body'>
    <Sidebar />
      <Maincontent /> 
    </div>
    </div>
  )
}

export default Dashboard
