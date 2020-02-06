import React, {useContext} from 'react';
import "./Input.css";
import {determineColor, Theme, ThemeContext} from "../Theme";

function Input(props:any) {
    const {value,type,onChange,style} = props;
    const {input,baselineColor,primaryColor,secondaryColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary:primaryColor,
        secondary:secondaryColor,
        baseline:baselineColor
    }
    const color = determineColor([props.color, input.color, 'baseline'], palette);

    const handleChange = (evt: any) => {
        console.log(typeof evt)
        if(onChange) {
            onChange(evt.target.value);
        }
    };

    return (
        <div className="neu-input">
            <input style={{...style, color: color}} type={type} value={value} onChange={handleChange}/>
        </div>
    );
}

Input.defaultProps = {
    type:'text',
}

export default Input;