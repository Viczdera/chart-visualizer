import React from 'react';
import loading from "../Assets/icons/loading.svg"
import loading1 from "../Assets/icons/loading2.svg"
export const Loading=()=> {
    return (
        <div>
            <img src={loading} alt="loading" width="60px"/>
        </div>
    );
}

export const Loading1=()=>{
    return (
        <div>
            <img src={loading1} alt="loading" width="120px"/>
        </div>
    );
}