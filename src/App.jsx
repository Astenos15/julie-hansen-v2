import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutList from "./components/AboutList";
import Team from "./components/Team";
import Communities from "./components/Communities";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import FooterTextArea from "./components/FooterTextArea";
import FooterFormArea from "./components/FooterFormArea";

function App() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <Main>
        <AboutList />
        <Team />
        <Communities />
        <Testimonials />
        <CallToAction />
      </Main>
      <Footer>
        <FooterFormArea />
        <FooterTextArea />
      </Footer>
    </>
  );
}

export default App;
