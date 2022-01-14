import { Navbar } from "./components";
import { Catalog, Footer, Hero, Mobile, Testimonial } from "./containers";

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
      <Footer />
    </div>
  );
}

export default App;
