import React, {useContext} from 'react';
import {ThemeContext, Theme, determineColor} from '../Theme';
import "./Button.css";

export default (props: any) => {
    const {style, children, onClick} = props;
    const {button, baselineColor, primaryColor, secondaryColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary: primaryColor,
        secondary: secondaryColor,
        baseline: baselineColor
    }
    const color = determineColor([props.color, button.color], palette);

    return (
        <button className="neu-button" onClick={onClick} style={
            {
                // @ts-ignore
                color: color,
                ...style
            }
        }
        >{children}</button>
    );
};