import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center sm:px-16 px-4  border-b border-[#29395D] bg-[#0F172A]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-48 object-contain"/>
        </Link>

        <Link 
          to="/create-post"
          className="font-inter font-medium bg-[#1B51A7] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#0F172A] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
