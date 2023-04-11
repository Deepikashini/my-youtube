import React from 'react'
import { Outlet } from 'react-router';
import SideBar from './SideBar';

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body;
