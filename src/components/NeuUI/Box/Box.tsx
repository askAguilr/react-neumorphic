import React from 'react';

export default (props:any) => {
    const {style,children, radius} = props;
    return(
        <div
            style={{
                borderRadius: typeof radius === "undefined" ? 16 : radius,
                backgroundColor:"#inherit",
                margin:10,
                boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
                ...style
            }}
        >{children}</div>
    );
}