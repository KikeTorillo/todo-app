import React from 'react';
import ReactDOM from "react-dom";

function Modal1({children}) {

    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
        );  
}

export {Modal1};