import React from "react";
import Navbar from "./Navbar";

/* 
----------------------------------------------------------------------------------------------------------------

Eftersom vi vill att header och footer ska visas på vår sida oavsett vilket "Route" vi är på
så kan vi skapa en Wrappeble Layout component som tar props.children i main. Det är i Main vi vill att 
våra routes ska visas.

----------------------------------------------------------------------------------------------------------------
*/


const Layout = (props) => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>{props.children}</main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
