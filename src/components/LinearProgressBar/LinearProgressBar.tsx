import React, {useContext} from 'react';
import styles from "./LinearProgressBar.css";
import {Theme, ThemeContext, determineColor} from "../Theme";

export interface LinearProgressBarProps {
    value: number,
    max?: number,
    style?: any,
    color?: string,
}

function LinearProgressBar(props: LinearProgressBarProps) {
    const {value, max, style} = props;
    const {linearProgressBar, baselineColor, primaryColor, secondaryColor, shadowColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary: primaryColor,
        secondary: secondaryColor,
        baseline: baselineColor
    }
    const color = determineColor([props.color, linearProgressBar.color, 'primary'], palette);

    return (
        <div className={styles.linearProgressBar}
             style={{boxShadow: "inset 0 0 7px rgba(255, 255, 255, 0.3), inset 5px 5px 5px rgba(0, 0, 0, 0.1), 3px 3px 7px " + shadowColor + " , -3px -3px 10px rgba(255, 255, 255, 0.95), inset -5px -5px 5px rgba(255, 255, 255, 0.3)",}}>
            <div className={styles.fill} style={{
                //@ts-ignore
                width: (value / max) * 100 + '%',
                // @ts-ignore
                backgroundColor: color,
                ...style
            }}/>
        </div>
    );
}


LinearProgressBar.defaultProps = {
    max: 100,
}

export default LinearProgressBar;