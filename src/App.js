import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="about-us" element={<About />} />
        <Route path="shopping" element={<Shop />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
