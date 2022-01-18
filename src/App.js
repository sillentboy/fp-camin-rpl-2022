import { Navbar, MobileNav } from "./components";
import {
  Catalog,
  Contact,
  Footer,
  Hero,
  Mobile,
  Testimonial,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
      <Catalog />
      <Mobile />
      <Testimonial />
      <Contact />
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
