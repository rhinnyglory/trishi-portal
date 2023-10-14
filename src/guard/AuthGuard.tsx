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
      <div className="row">
        {/* {toggle && (
        )} */}
        <Sidebar></Sidebar>
        {/* {toggle && <div className="col-4 col-md-2"></div>} */}
        <div className="col px-0">
          <Header />
          <>{children}</>
        </div>
      </div>
    </div>
  )
}

export default AuthGuard