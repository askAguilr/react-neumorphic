import React from 'react';
import "./LinearProgressBar.css";

function LinearProgressBar(props:any) {
    const {value,max} = props;
    return(
        <div className="neu-linear-progress-bar">
           <div className="neu-linear-progress-bar-fill" style={{width:(value/max)*100+'%'}}/>
        </div>
    );
}



LinearProgressBar.defaultProps = {
    max:100,
}

export default LinearProgressBar;