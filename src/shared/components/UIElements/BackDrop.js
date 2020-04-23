import React from 'react';
import reactDOM from 'react-dom';
import './BackDrop.css';


const BackDrop = (props) =>{
    return reactDOM.createPortal(<div className="backdrop" onClick={props.onClick}>
    </div>,document.getElementById("backdrop-hook"));
    

    
}

export default BackDrop;