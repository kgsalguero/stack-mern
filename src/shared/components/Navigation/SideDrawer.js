import React from 'react';
import './SideDrawer.css';
import reactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';


const SideDrawer = (props) =>{
    const content =(
        <CSSTransition in={props.show} timeout= {200} classNames="side-in-left"
        mountOnEnter unmountOnExit>
            <aside className="side-drawer" onClick={props.onClick}>
                {props.children} </aside>
        </CSSTransition>
    );
    
    return reactDOM.createPortal(content, document.getElementById('drawer-hook'));


    
}

export default SideDrawer;