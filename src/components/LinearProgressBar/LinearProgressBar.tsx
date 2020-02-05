import React, {useContext} from 'react';
import "./LinearProgressBar.css";
import {Theme, ThemeContext, determineColor} from "../Theme";


function LinearProgressBar(props:any) {
    const {value,max, style} = props;
    const {linearProgressBar,baselineColor,primaryColor,secondaryColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary:primaryColor,
        secondary:secondaryColor,
        baseline:baselineColor
    }
    const color = determineColor([props.color,linearProgressBar.color,'baseline'],palette);

    return(
        <div className="neu-linear-progress-bar">
           <div className="neu-linear-progress-bar-fill" style={{
               width:(value/max)*100+'%',
               // @ts-ignore
               backgroundColor: color,
               ...style
           }}/>
        </div>
    );
}



LinearProgressBar.defaultProps = {
    max:100,
}

export default LinearProgressBar;