import React from 'react';

const Circle = (props: any) => {
    const {style, children, radius} = props;
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
                backgroundColor: "#inherit",
                boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
                ...style
            }}
        >{children}</div>
    );
}

Circle.defaultProps = {
    radius : 70
};

export default Circle