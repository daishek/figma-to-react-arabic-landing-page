import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../components/section";
import TripCard from "../components/trip-card";

import "swiper/css";
import Container from "../components/container";
import { tripsData } from "../assets/data";

const Trips = () => {
  return (
    <Section title="الرحلات التي نقدمها" subtitle="قم بزيارة العالم">
      <Container>
        <Swiper slidesPerView={"auto"} spaceBetween={20}>
          {tripsData.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center w-fit">
              <TripCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Trips;
