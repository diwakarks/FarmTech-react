import Intro from "../components/Intro";
import Fertilisers from "../components/Fertilisers";
import Suppliers from "../components/Suppliers";
import AgriProducts from "../components/AgriProducts";

function Home() {
  return (
    <div className="home-bg">
      <Intro />
      <Fertilisers />
      <Suppliers />
      <AgriProducts />
    </div>
  );
}

export default Home;
