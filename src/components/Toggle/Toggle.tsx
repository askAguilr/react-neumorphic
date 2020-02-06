import React, {useContext} from 'react';
import "./Toggle.css";
import {determineColor, Theme, ThemeContext} from "../Theme";

const Toggle = (props: any) => {
    const {style, children, onChange, value} = props;
    const {toggle, baselineColor, primaryColor, secondaryColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary: primaryColor,
        secondary: secondaryColor,
        baseline: baselineColor
    };
    const color = determineColor([props.color, toggle.color, 'primary'], palette);

    return (
        <div className="neu-toggle">
            <input {...props} type="checkbox" id="switch" className="neu-toggle-input"
                   checked={!value}

                   onChange={onChange}
                   style={
                       {
                           ...style,
                       }
                   }
            >{children}</input>
            <label className="neu-toggle-label" htmlFor="switch" style={{
                backgroundColor: !value ? color : "rgba(0,0,0,.4)"
            }}></label>
        </div>
    );
};



Toggle.defaultProps = {
    value:true,
}

export default Toggle;