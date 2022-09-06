//import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
