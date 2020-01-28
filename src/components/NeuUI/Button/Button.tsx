import React from 'react';
import "./Button.css";

export default (props:any) => {
    const {style,children} = props;
    return(
        <button className="NeuButton" style={
            {
                ...style,
            }
        }
        >{children}</button>
    );
}