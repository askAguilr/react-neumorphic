import React from 'react';
import "./Toggle.css";

export default (props:any) => {
    const {style,children} = props;
    return(
        <div className="neu-toggle">
            <input {...props} type="checkbox" id="switch" className="neu-toggle-input" style={
                {
                    ...style,
                }
            }
            >{children}</input>
            <label className="neu-toggle-label" htmlFor="switch" ></label>
        </div>
    );
}