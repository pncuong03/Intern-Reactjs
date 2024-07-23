import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
