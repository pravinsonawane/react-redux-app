import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
	return (
		<button>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Button.defaultProps = {
}

export default Button;
