/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import FeaturedProduct from "./Components/FeaturedProduct/FeaturedProduct";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import TopNavBar from "./Components/TopNav/TopNavBar";
import Category from "./Components/category/Category";

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col bg-light'>
        <TopNavBar />

        <main className='flex-grow flex'>
          <Routes>
            <Route path='/' element={<FeaturedProduct />} />
            <Route path='/category' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
