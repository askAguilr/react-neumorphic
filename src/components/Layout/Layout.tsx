import React, {useContext} from 'react';
import {Theme, ThemeContext} from "../Theme";

export interface LayoutProps {
    children: any,
    style?: any
}

const Layout = (props: LayoutProps) => {
    const {children, style} = props;
    const {backgroundColor} = useContext<Theme>(ThemeContext);
    return (
        <section className="neu-layout" style={{
            backgroundColor: backgroundColor,
            ...defaultStyle,
            ...style
        }}>{children}</section>
    );
}

const Header = (props: LayoutProps) => {
    const {children, style} = props;
    return (
        <header className="neu-header" style={style}>{children}</header>
    );
}
const Content = (props: LayoutProps) => {
    const {children, style} = props;
    return (
        <main className="neu-content" style={style}>{children}</main>
    );
}
const Footer = (props: LayoutProps) => {
    const {children, style} = props;
    return (
        <footer className="neu-footer" style={style}>{children}</footer>
    );
}

const defaultStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
};

export {Layout, Header, Footer, Content};
