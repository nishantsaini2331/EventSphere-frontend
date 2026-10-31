import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
