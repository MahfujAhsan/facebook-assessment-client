import React from 'react';
import loadingSpinner from "../assets/spinner.gif";

const Spinner = () => {
    return (
        <div style={{width: '50%', height: '50%', margin: 'auto'}}>
            <img style={{width: '100%'}} src={loadingSpinner} alt="loadingSpinner" />
        </div>
    );
};

export default Spinner;