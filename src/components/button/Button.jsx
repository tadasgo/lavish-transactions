import React from 'react';

import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({ children, type, onClick, btnStyle, btnSize, btnColor }) => {
	// check if we have those styles else set default or null as a class
	const checkBtnColor = COLOR.includes(btnColor) ? btnColor : null;
	const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
	const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

	return (
		<button type={type} onClick={onClick} className={`btn ${checkBtnStyle} ${checkBtnSize} ${checkBtnColor}`}>
			{children}
		</button>
	);
};
