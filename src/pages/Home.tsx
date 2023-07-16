import Header from "../components/header";
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
    </div>
  );
};

export default HomePage;
