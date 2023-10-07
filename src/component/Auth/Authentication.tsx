import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Authentication.css';

const Authentication: React.FunctionComponent<any> = props => {
    const location = useLocation();
    const { children } = props;
    console.log(location.pathname, 'sdfsdfg')

    return (
        <div className="container-fluid authenticate">
            <div className="row">
                <div className="col-md-3 authenticate-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                    <h2>Trishi Portal</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde repellendus, necessitatibus sit et in architecto! Doloremque excepturi laboriosam ratione laborum sequi nobis sunt voluptate esse. Natus consequuntur doloremque ad!</p>
                    {location.pathname == "/auth/login" ?
                        <><button><Link to="/auth/register">Signup</Link></button><br /></>
                        : <><button><Link to="/auth/login">Login</Link></button><br /></>
                    }
                </div>
                <div className="col-md-9 authenticate-right">
                    {location.pathname == "/auth/register" ?
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Recruiter</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Employee</a>
                            </li>
                        </ul> : <></>}
                    <>{children}</>
                </div>
            </div>
        </div>
    )
}

export default Authentication;