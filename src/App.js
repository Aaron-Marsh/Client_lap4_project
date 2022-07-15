import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import {
  HomePage,
  BooksPage,
  ForumsPage,
  ProfilePage,
  SearchPage,
} from "./pages/index";
import { Navbar } from "./components/index";

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
      </Routes>
    </>
  );
}

export default App;
