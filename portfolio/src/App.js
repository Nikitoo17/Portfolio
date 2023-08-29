import Home from "./views/Home/Home";
import Proyects from "./views/Proyects/Proyects";
import Contact from "./views/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-center scroll-smooth">
      <div className="min-h-screen flex flex-col items-center justify-center text-white font-poppins">
        <Nav />
        <Home />
        <Proyects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
