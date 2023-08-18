import React from "react";
import "./ToggleMenu.css";

const ToggleMenu = ({ toggle, setToggle }) => {
	return (
		<>
			<input
				defaultChecked={toggle}
				onClick={() => setToggle(true)}
				type='checkbox'
				id='checkbox'
			/>
			<label htmlFor='checkbox' className='toggle'>
				<div className='bars' id='bar1'></div>
				<div className='bars' id='bar2'></div>
				<div className='bars' id='bar3'></div>
			</label>
		</>
	);
};

export default ToggleMenu;
