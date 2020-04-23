import React, {useState} from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import {Link} from 'react-router-dom';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/BackDrop';


const MainNavigation = (props) =>{
    // se declara state drawerIsOpen, setDrawerIsOpen permite modificar el state
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    //hadler al abrir
    const openDrawerHandler =() =>{
        setDrawerIsOpen(true);
    }
    //handler al cerrar
    const closeDrawerHandler=()=>{
        setDrawerIsOpen(false);
    }

    return(
        <React.Fragment>
                {drawerIsOpen? 
                (<BackDrop onClick={closeDrawerHandler}/>): null}

                {drawerIsOpen ? (<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>) : null}
                

                <MainHeader>
                    <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                        <span /> 
                        <span /> 
                        <span /> 
                        
                    </button>
                    <h1>
                        <Link to="/"> Your Places</Link>
                    </h1>
                    <nav className="main-navigation__header-nav">
                        <NavLinks />
                    </nav>
                </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;