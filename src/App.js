import { Routes, Route } from "react-router-dom";
// import {getServer} from './getServer'
import React from "react";
import {
    HomePage,
    BooksPage,
    ForumsPage,
	PostPage,
    ProfilePage,
    SearchPage
} from "./pages/index";
import { Navbar } from "./components/index";
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
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/forums" element={<ForumsPage />} />
                <Route path="/forums/:postId" element={<PostPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </>
    );
}

export default App;
