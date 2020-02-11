import React, {useContext} from 'react';
import "./Input.css";
import {determineColor, Theme, ThemeContext} from "../Theme";

function Input(props: any) {
    const {value, type, onChange, style} = props;
    const {input, baselineColor, primaryColor, secondaryColor, shadowColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary: primaryColor,
        secondary: secondaryColor,
        baseline: baselineColor
    }
    const color = determineColor([props.color, input.color, 'baseline'], palette);

    const handleChange = (evt: any) => {
        if (onChange) {
            onChange(evt.target.value);
        }
    };

    return (
        <div className="neu-input"
             style={{boxShadow: "inset 5px 5px 5px " + shadowColor + ",  inset -5px -5px 5px rgba(255, 255, 255, 0.3)"}}>
            <input {...props} style={{...style, color: color}} type={type} value={value} onChange={handleChange}/>
        </div>
    );
}

Input.defaultProps = {
    type: 'text',
}

export default Input;