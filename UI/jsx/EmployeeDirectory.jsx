import React from 'react';
import NavPage from './NavPage.jsx';
import { HashRouter } from 'react-router-dom';

export default class EmployeeDirectory extends React.Component {
	render() {
		return (
			<HashRouter>
				<NavPage />
			</HashRouter>
		);
	}
}
