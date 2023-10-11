import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="bg-primary text-white sidebar border-end">
      <div className="mx-2 text-center align-content-center ">
        <span className="brand-name fs-4">trishi Portal</span>
      </div>

      <div className="list-group list-group-flush bg-primary my-4 text-white">
        <a className="list-group-item border-top text-white bg-primary" href="#name1">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>DashBoard</span>
        </a>
        <a className="list-group-item text-white bg-primary  py-2" href="#name2">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </a>
        <a className="list-group-item text-white bg-primary py-2" href="#name3">
          <i className="bi bi-table fs-5 me-3"></i>
          <span>Products</span>
        </a>
        <a className="list-group-item text-white bg-primary py-2" href="#name4">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Report</span>
        </a>
        <a className="list-group-item text-white bg-primary py-2" href="#name5">
          <i className="bi bi-people fs-5 me-3"></i>
          <span>Customers</span>
        </a>
        <a className="list-group-item text-white bg-primary border-bottom  py-2" href="#name6">
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar