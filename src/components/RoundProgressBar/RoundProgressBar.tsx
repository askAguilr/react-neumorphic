import React, {FunctionComponent, useContext} from 'react';
import styles from './RoundProgressBar.css';
import {determineColor, Theme, ThemeContext} from "../Theme";

export interface RoundProgressBarProps {
    size?: number,
    strokeWidth?: number,
    value: number,
    max?: number,
    color?: string
}

const RoundProgressBar: FunctionComponent<RoundProgressBarProps> = ({size = 140, strokeWidth = 7, children, color, value, max = 100}) => {
    const radius = (size - strokeWidth) / 2;
    const {roundProgressBar, baselineColor, primaryColor, secondaryColor, shadowColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary: primaryColor,
        secondary: secondaryColor,
        baseline: baselineColor
    }
    const calculatedColor = determineColor([color, roundProgressBar.color, 'baseline'], palette);
    const viewBox = `0 0 ${size} ${size}`;
    const dashArray = radius * Math.PI * 2;
    // @ts-ignore
    const dashOffset = dashArray - dashArray * value / max;

    return (
        <div className={styles.root} style={{
            boxShadow: "inset 0 0 7px rgba(255, 255, 255, 0.3), inset 5px 5px 5px rgba(0, 0, 0, 0.1), 3px 3px 7px " + shadowColor + " , -3px -3px 10px rgba(255, 255, 255, 0.95), inset -5px -5px 5px rgba(255, 255, 255, 0.3)",
        }}>
            <svg
                width={size}
                height={size}
                viewBox={viewBox}
            >
                <circle
                    fill={'none'}
                    stroke={'#e8e9f0'}
                    cx={
                        size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}/>
                <circle
                    fill={'none'}
                    stroke={calculatedColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>

            <div style={{height: radius * 2 - strokeWidth, width: radius * 2 - strokeWidth}}>{children}</div>
        </div>
    );
}


export default RoundProgressBar;