import React from 'react'
import "./Dashboard.css"
import { useData } from '../DataContext'; 
import ResponsiveTopNav from '../NavBar/NavBar';
const Dashboard = () => {
  const { data } = useData();
  return (
    <div>
    <ResponsiveTopNav />
    </div>
  )
}

export default Dashboard
