import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ProductContext } from "./context/productContext";
import { useState } from "react";
import { SideBar } from "./components/SiderBar/sideBar";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <ProductContext.Provider value={{ showCart, setShowCart }}>
        <Navbar />
        <SideBar />
        <div className="container mx-auto px-4 mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ProductContext.Provider>
    </>
  );
}

export default App;
