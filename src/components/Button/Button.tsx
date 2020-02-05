import React, {useContext} from 'react';
import {ThemeContext, Theme, determineColor} from '../Theme';
import "./Button.css";

export default (props:any) => {
    const {style,children} = props;
    const {button,baselineColor,primaryColor,secondaryColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary:primaryColor,
        secondary:secondaryColor,
        baseline:baselineColor
    }
    const color = determineColor([props.color,button.color],palette);

    return(
        <button className="neu-button" style={
            {
                // @ts-ignore
                color: color,
                ...style
            }
        }
        >{children}</button>
    );
}