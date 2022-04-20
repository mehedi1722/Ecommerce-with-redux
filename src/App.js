import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import NotFound from "./containers/NotFound";
import About from "./containers/About";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/productdetails/:productId"
            element={<ProductDetails />}
          />
          <Route exact path="/products" element={<ProductListing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<ProductListing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
