import Navbar from "./components/Navbar";
import "./asset/css/style.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import CatDetail from "./pages/CatDetail";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <>
      <div className="bg-[#222831] min-h-screen">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats/:id" element={<CatDetail />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
