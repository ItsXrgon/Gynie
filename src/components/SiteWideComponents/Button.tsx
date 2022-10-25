import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    type,
    onClick,
    buttonStyle,
    buttonSize 
    }: {
         type: any;
         onClick: any;
         buttonStyle: any;
         buttonSize: any;
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/SignUp' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
            SIGN UP
            </button>
        </Link>
    )
}