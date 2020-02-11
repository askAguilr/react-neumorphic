import React, {useContext} from 'react';
import {useState} from 'react';
import "./Select.css";
import {determineColor, Theme, ThemeContext} from "../Theme";

function Select(props: any) {
    const {value, options, onChange, id} = props;
    const [active, setActive] = useState(false);
    const {select, baselineColor, primaryColor, secondaryColor, shadowColor} = useContext<Theme>(ThemeContext);
    const palette = {
        primary: primaryColor,
        secondary: secondaryColor,
        baseline: baselineColor
    }
    const color = determineColor([props.color, select.color, 'baseline'], palette);

    const handleClick = (e: any) => {
        setActive(false);
        if (typeof onChange !== 'undefined') {
            // @ts-ignore
            onChange(e.currentTarget.dataset.value, id)
        }
    }

    return (
        <div
            className={'neu-select' + (active ? ' neu-select-active' : ' neu-select-inactive') + (typeof value !== 'undefined' && value.length ? ' selected' : '')}
            style={{
                color: color,
                boxShadow: "inset 0 0 15px rgba(80, 80, 80, 0), inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px " + shadowColor + ", -7px -7px 20px rgba(255, 255, 255, .7), inset 0px 0px 4px rgba(255, 255, 255, .2)"
            }}
        >
            <div className=' neu-select-value' onClick={() => setActive(!active)}>
                <p>{value}</p>
            </div>
            <div className='neu-select-options'>
                {options.map((option: any) => {
                    let type = option.constructor === String ? 'String' : option.constructor === Object ? 'Object' : false
                    option = type === 'String' ? {[option]: option} : option
                    return type ? <div
                        className={'neu-select-option' + (value === option[Object.keys(option)[0]] ? ' select-option-active' : '')}
                        onClick={handleClick} data-value={option[Object.keys(option)[0]]}
                        key={option[Object.keys(option)[0]]}>{Object.keys(option)[0]}</div> : ''
                })}
            </div>
            <svg viewBox="0 0 200 150" width="13" height="11">
                <path d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18
                        c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0
                        c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z"/>
            </svg>
            <div className='neu-select-trigger' onClick={() => setActive(!active)}>
            </div>
        </div>
    );
}

    Select.defaultProps = {
        options: [],
    }

    export default Select;