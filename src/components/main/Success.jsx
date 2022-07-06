import React from 'react';

import success from "../../images/success.jpg"

function Success() {
    return (
        <>
        <div className='success-top-box'>
            <img src={success} alt="success-bg"></img>
            <div className='succes-top-text'>
            <h1>SUCCESS</h1>
            <h3>and everything you need to know.</h3>
            </div>
        </div>

        
        </>
    );
}

export default Success;