import React, { useEffect, useState } from 'react';
import "../Styles/ProgressBar.scss"
const ProgressBar=()=>{

    const [scroll,setScroll]=useState(0);

    useEffect(()=>{
        
        let PBHandler=()=>{
            const scrollHeight= document.documentElement.scrollHeight;
            const clientHeight= document.documentElement.clientHeight;
            const maxHeight= scrollHeight- clientHeight;
            const totalScroll= document.documentElement.scrollTop;

            const actualScroll= totalScroll/maxHeight;
            setScroll(actualScroll)

        }

        //event listener
        window.addEventListener("scroll", PBHandler);
        return () => window.removeEventListener("scroll", PBHandler);

    })

    return(
        <div id="prbarContainer">
            <div id="prBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}}/>
        </div>
    );
}
export default ProgressBar;