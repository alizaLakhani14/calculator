import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => {
	return <div className="ClearButton" onClick={props.clearHandler}>{props.children}</div>;
};

export default ClearButton;
