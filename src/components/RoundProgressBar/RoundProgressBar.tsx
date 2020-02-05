import React from 'react';
import './RoundProgressBar.css';

function RoundProgressBar(props:any) {
    const {children,size,strokeWidth,color} = props;
    const radius = (size - strokeWidth) / 2;
    const viewBox = `0 0 ${size} ${size}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * props.value / props.max;
    return (
        <div className="neu-roundprogressbar">
            <svg
                width = {size}
                height = {size}
                viewBox = {viewBox}
            >
                <circle
                    fill = {'none'}
                    stroke = {'#e8e9f0'}
                    cx = { size / 2 }
                    cy = { size / 2 }
                    r = { radius }
                    strokeWidth = {`${strokeWidth}px`} />
                <circle
                    fill = {'none'}
                    stroke = {color}
                    strokeLinecap = "round"
                    strokeLinejoin = "round"
                    strokeDasharray = {dashArray}
                    strokeDashoffset = {dashOffset}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={`${strokeWidth}px`}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>

            <div style={{height:radius*2-strokeWidth,width:radius*2-strokeWidth}}>{children}</div>
        </div>
    );
}

RoundProgressBar.defaultProps = {
    size: 140,
    value: 25,
    max: 100,
    strokeWidth: 7,
    color: '#1890ff',
    text: ""
}

export default RoundProgressBar;