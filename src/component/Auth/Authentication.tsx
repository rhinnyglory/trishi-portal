import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Authentication.css';

const Authentication: React.FunctionComponent<any> = (props: any) => {
    const location = useLocation();

    useEffect(() => {
        console.log(location, 'sdfsdfg')
    }, [location.pathname]);

    const { children } = props;

    return (
        <div className="container-fluid authenticate">
            <div className="row">
                <div className="col-md-3 authenticate-left">
                    <h2>Trishi Portal</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde repellendus, necessitatibus sit et in architecto! Doloremque excepturi laboriosam ratione laborum sequi nobis sunt voluptate esse. Natus consequuntur doloremque ad!</p>
                    {location.pathname == "/login" ?
                        <><button><Link to="/register">Signup</Link></button><br /></>
                        : <><button><Link to="/login">Login</Link></button><br /></>
                    }
                </div>
                <div className="col-md-9 authenticate-right">
                    <>{children}</>
                </div>
            </div>
        </div>
    )
}

export default Authentication;