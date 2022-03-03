import React from 'react';
import errorsvg from "../Assets/icons/error1.svg"
const ErrorSvg=()=> {
    return (
        <div>
            <img src={errorsvg} alt="Error" width="60px"/>
        </div>
    );
}

export default ErrorSvg;