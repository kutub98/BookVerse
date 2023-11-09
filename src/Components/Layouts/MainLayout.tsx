
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = () => {
  const [scrollActive, setScrollActive] = useState(false);

  const handlingScroll = () => {
    const scrollLength = window.scrollY;
    if (scrollLength > 0) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handlingScroll);
    return () => {
      window.removeEventListener('scroll', handlingScroll);
    }
  }, []);
  return (
    <div>
      <Navbar scrollActive={scrollActive}/>
      <div className="pt-16">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
