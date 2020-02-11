import React, {useContext} from 'react';
import {Theme, ThemeContext} from "../Theme";

export interface BoxProps {
    style?: any,
    children?: any,
    radius?: Number,
}

export default (props: BoxProps): any => {
    const {style, children, radius} = props;
    const {shadowColor, backgroundColor} = useContext<Theme>(ThemeContext);

    return (
        <div
            style={{
                borderRadius: typeof radius === "undefined" ? 16 : radius.toString(),
                backgroundColor: backgroundColor,
                margin: 10,
                padding: 15,
                boxShadow: "9px 9px 16px " + shadowColor + ", -9px -9px 16px  rgba(255,255,255, 0.5)",
                ...style
            }}
        >{children}</div>
    );
}