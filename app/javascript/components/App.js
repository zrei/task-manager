
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from './Task/Task';
import Tasks from './Tasks/Tasks';
import NotFound from './Functions/NotFound';
import ErrorPage from './Functions/ErrorPage';
import SearchResults from './Search/SearchResults';
import Category from './Category/Category';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Tasks />} />
				<Route path="/task/:slug" element={<Task />} />
				<Route path="/search/:searchTerm" element={<SearchResults />} />
				<Route path="/category/:category" element={<Category />} />
				<Route path="/error" element={<ErrorPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;