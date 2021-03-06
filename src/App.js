import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/index';
// import {getServer} from './getServer'
import {
	HomePage,
	BooksPage,
	ForumsPage,
	PostPage,
	ProfilePage,
	PageNotFound,
} from './pages/index';

// import { useGetServer } from './useGetServer'

function App() {
	// Detect current environment and set backend server URL using Custom Hook
	// useEffect(()=>{
	// 	getServer();
	// })

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/books' element={<BooksPage />} />
				<Route path='/forums' element={<ForumsPage />} />
				<Route path='/forums/:postId' element={<PostPage />} />

				<Route path='/profile/:username' element={<ProfilePage />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
