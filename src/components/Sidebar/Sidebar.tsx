import './styles.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { Children, Component } from 'react';
export default function Sidebar(){
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-width-280px overflow-hidden">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"></svg>
                <span className="fs-4">Fire</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Home
                </a>
            </li>
            <li>
                <a href="/expenses" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Expenses
                </a>
            </li>
            <li>
                <a href="/CompoundInterestCalculator" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Calculators
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Stock Market
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Crypto Market
                </a>
            </li>
            </ul>
            <hr/>
            <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
            </div>
        </div>
    )
}

interface Props {
    to: string;
    children: Component;
    anotherProp?: string; // ? Makes so the prop is not required
}



function CustomLink( props: Props ){
    const path = window.location.pathname;
    return(
        <li><a href={props.to}>{props.children}</a></li>
    )
}