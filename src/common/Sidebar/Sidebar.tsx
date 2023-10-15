import React from 'react';
import "./Sidebar.css";
import { employeeSideMenu } from '../../constant/constant';

const Sidebar = () => {
  return (
    <div className="bg-primary text-white text-start sidebar border-end">
      <div className="list-group list-group-flush bg-primary text-white">
        {employeeSideMenu.map((menu) => <a key={menu.employeeSideMenuId} className="list-group-item border-top text-white bg-primary" href="#name1">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>{ menu.employeeSideMenuName}</span>
        </a>)}
       
      </div>
    </div>
  )
}

export default Sidebar