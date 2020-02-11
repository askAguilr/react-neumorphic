import React, {useContext} from 'react';
import {Theme, ThemeContext} from "../Theme";

const Circle = (props: any) => {
    const {style, children, radius} = props;
    const {shadowColor} = useContext<Theme>(ThemeContext);
    return (
        <div
            style={{
                margin: 10,
                borderRadius: 900,
                width: radius,
                height: radius,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "inherit",
                boxShadow: "9px 9px 16px " + shadowColor + ", -9px -9px 16px  rgba(255,255,255, 0.5)",
                ...style
            }}
        >{children}</div>
    );
}

Circle.defaultProps = {
    radius: 70
};

export default Circle