import React from 'react';
import './Button.css';

const isOperator = (val) => {
	let selectClass;
	if (val === isNaN(val) || val === '.' || val === '=') {
		selectClass = 'operator';
	}
	return selectClass;
};

const Button = (props) => {
	return (
		<div
			className={`button-wrapper ${isNaN(props.children) === true &&
			props.children !== '.' &&
			props.children !== '='
				? 'operator'
				: null}`}
			onClick={() => props.handleInput(props.children)}
		>
			{props.children}
		</div>
	);
};

export default Button;
