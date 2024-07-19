import React from 'react';
import PropTypes from 'prop-types';

export default class Alert extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="alert" className={`alert ${this.props.result ? 'alert-success' : 'alert-danger'}`} role="alert">
				{this.props.message}
			</div>
		);
	}
}

Alert.propTypes = {
	result: PropTypes.bool,
	message: PropTypes.string
};
