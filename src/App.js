import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
    HomePage,
    BooksPage,
    ForumsPage,
    ProfilePage,
    SearchPage,
    PageNotFound,
} from './pages/index';
import { Navbar, LoginFooter } from './components/index';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/forum" element={<ForumsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
