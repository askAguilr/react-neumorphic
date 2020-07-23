import React, {useContext} from 'react';
import {ThemeContext, Theme, determineColor} from '../Theme';
import styles from "./Button.css";

export interface ButtonProps {
    style?: any,
    children: any,
    onClick?: (arg0: any) => any,
    color?: string
}


export default (props: ButtonProps) => {
    const {style, children, onClick} = props;
    const {button, baselineColor, primaryColor, secondaryColor, shadowColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary: primaryColor,
        secondary: secondaryColor,
        baseline: baselineColor
    }
    const color = determineColor([props.color, button.color], palette);

    return (
        <button className={styles.button} onClick={onClick} style={
            {
                // @ts-ignore
                color: color,
                boxShadow: "inset 0 0 15px rgba(80, 80, 80,0), inset 0 0 20px rgba(255, 255, 255,0), 7px 7px 15px " + shadowColor + ",-7px -7px 20px rgba(255, 255, 255,.7),inset 0px 0px 4px rgba(255, 255, 255,.2)",
                ...style
            }
        }
        >{children}</button>
    );
};