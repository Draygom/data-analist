import "./App.css";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
// import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </I18nextProvider>
  );
}

export default App;
