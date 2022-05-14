import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import Cart from "./components/Cart";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
