import { Routes, Route } from 'react-router-dom';
import {
	HomePage,
	BooksPage,
	ForumsPage,
	ProfilePage,
	SearchPage,
} from './pages/index';
import { Navbar } from './components/index';

function App() {
	return (
		<>
			<Navbar />
			<h1>Read Herring</h1>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/books' element={<BooksPage />} />
				<Route path='/forums' element={<ForumsPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/search' element={<SearchPage />} />
			</Routes>
		</>
	);
}

export default App;
