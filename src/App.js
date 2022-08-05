import React from "react";
import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <ProductPage />
      </Layout>
    </React.Fragment>
  );
}

export default App;
