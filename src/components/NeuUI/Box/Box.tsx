import React, {useContext} from 'react';
import {Theme, ThemeContext} from "../Theme";

export default (props:any) => {
    const {style,children,radius} = props;
    const {shadowColor} = useContext<Theme>(ThemeContext);
    //TODO: apply shadow color, convert to rgba
    return(
        <div
            style={{
                borderRadius: typeof radius === "undefined" ? 16 : radius,
                backgroundColor:"#inherit",
                margin:10,
                padding:15,
                boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
                ...style
            }}
        >{children}</div>
    );
}