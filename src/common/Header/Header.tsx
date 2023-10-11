import React from 'react';
import './Header.css'

const Header = ({ Toggle }: any) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-white bg-primary text-white px-3">
            <i className="navbar-brand bi bi-justify-left text-white fs-4" onClick={Toggle}></i>
            <button className="navbar-toggler d-lg-none text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-justify"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2  mt-lg-0">
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            User
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header