import Home from "./views/Home/Home";
import Proyects from "./views/Proyects/Proyects";
import Contact from "./views/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-black  to-purple-950 text-center scroll-smooth">
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
