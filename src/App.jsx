import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutList from "./components/AboutList";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import FooterTextArea from "./components/FooterTextArea";
import FooterFormArea from "./components/FooterFormArea";
import Strategy from "./components/Strategy";
import Listings from "./components/Listings";
import Communities from "./components/Communities";

function App() {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <Main>
        <AboutList />
        <Strategy />
        <Team />
        <Communities />
        <Testimonials />
        <Listings />
        <CallToAction />
      </Main>
      <Footer>
        <FooterTextArea />
        <FooterFormArea />
      </Footer>
    </>
  );
}

export default App;
