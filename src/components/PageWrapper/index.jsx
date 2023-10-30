import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles=({isActive})=>({color:isActive ? '#2B061E' : '#875053'});

const PageWrapper=()=>{
    return(
        <main>
            <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to="/about" style={styles}>About</NavLink>
            </nav>
            </header>
            <Outlet/>
        </main>
    )
}

export default PageWrapper;