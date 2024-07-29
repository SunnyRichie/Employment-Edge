import React from 'react';
 import { FaThLarge ,FaRegCalendarCheck, FaBell, FaQuestionCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './sidebar.css';
import projectlogo from './jobproject logo.png'

const Sidebar = () => {
  return (
   <>
    <div className="logo"><img src={projectlogo} alt="Jobbero"></img></div>
    <div className="sidebar">
   
      <nav>
        <ul>
        <FaThLarge  className='sidebar-icons' /> 
          <li>Dashboard</li>
          <FaRegCalendarCheck className='sidebar-icons' /> 
          <li>Applied Jobs</li>
          <FaBell className='sidebar-icons'/>
          <li> Job Alerts</li>
          <FaQuestionCircle className='sidebar-icons'/> 
          <li>Help</li>
          <FaCog className='sidebar-icons'/> 
          <li>Settings</li>
          <FaSignOutAlt className='sidebar-icons'/>
          <li> Logout</li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Sidebar;
