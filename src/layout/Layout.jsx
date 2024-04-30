import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';
// import About from '../components/About/About';


const Layout = () => {
  return (
    <>
      <Header/>
        <main>
          <Routers/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout;
