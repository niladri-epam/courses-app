import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CreateCourse from './components/CreateCourse/CreateCourse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/courses' element={<App />} />
				<Route exact path='/courses/add' element={<CreateCourse />} />
				<Route exact path='/registration' element={<Registration />} />
				<Route exact path='/login' element={<Login />} />
				<Route path='*' element={<Navigate to='/courses' />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
