import React from "react";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import CartLink from "./CartLink";
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
        <Box>
          <AppBar position="static">
            <Toolbar>
              <CartLink />
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main style={{minHeight: '100vh'}}>{props.children}</main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
