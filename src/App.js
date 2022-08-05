import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <Layout>
        <Routes/>
      </Layout>
    </div>
  );
}

export default App;
