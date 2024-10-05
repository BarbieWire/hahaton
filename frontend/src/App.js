// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default App;
