import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import CountryInfoPage from "./pages/CountryInfoPage";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:id" element={<CountryInfoPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
