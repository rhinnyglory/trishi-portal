import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Sidebar, Header } from '../common';

const AuthGuard: React.FunctionComponent<any> = props => {
  const { children } = props;
  console.log("display children", { children });

  const res = "user";

  if (res === null) {
    console.log("Auth token");
    return <Navigate to="/login" />
  }

  // const [toggle, setToggle] = useState(true)

  // const Toggle = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div className="container-fluid  min-vh-100 dashboard">
      <div className='row'>
        <Header />
      </div>
      <div className="row">
        {/* {toggle && (
        )} */}
          <div className="col-4 col-xl-2 px-0  bg-primary vh-100 ">
            <Sidebar></Sidebar>
          </div>
        {/* {toggle && <div className="col-4 col-md-2"></div>} */}
          <div className="col-8 col-xl-10 ">

          <>{children}</>
          </div>
        {/* <div className="col px-0"> */}
        </div>
    </div>
  )
}

export default AuthGuard