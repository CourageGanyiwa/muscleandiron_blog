import { StrictMode } from "react";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <StrictMode>
      <Navbar />
      <Section />
      <Footer />
    </StrictMode>
  );
};

export default App;
