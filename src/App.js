import React from 'react';
// components
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Work from './components/Work';
import CookieConsent from "react-cookie-consent";

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Home />
      <Nav />
      <Work />
      
      <CookieConsent
        debug={true}
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{
          textShadow: "2px 2px black",
        }}
        buttonStyle={{
          color: "white",
          fontWeight: "bolder",
          textShadow: "2px 2px black",
        }}
      >
        This website uses cookies to enhance the user experience.

      </CookieConsent>
    </div>

  );
};

export default App;
