import Home from "./views/Home/Home";
import Proyects from "./views/Proyects/Proyects";
import Contact from "./views/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-black  to-purple-950 text-center scroll-smooth">
      <div className="min-h-screen gap-y-11 flex flex-col items-center justify-center text-white font-poppins">
        <Nav />
        <div className="px-40">
          <Home />
          <Skills />
          <Proyects />
        </div>
        <Contact />
        {/* <Footer /> */}
      </div>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JGGEVD46LD"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JGGEVD46LD');
        `}
      </script>
    </div>
  );
}

export default App;
