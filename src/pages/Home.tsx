import Footer from "../components/footer";
import Header from "../components/header";
import Connect from "../partials/connect";
import OurServices from "../partials/our-services";
import Price from "../partials/prices";
import Reviews from "../partials/reviews";
import Trips from "../partials/trips";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Trips />
      <OurServices />
      <Price />
      <Reviews />
      <Connect />
      <Footer />
    </div>
  );
};

export default HomePage;
