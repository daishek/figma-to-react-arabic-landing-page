import { servicesData } from "../assets/data";
import Container from "../components/container";
import Section from "../components/section";
import ServicesCard from "../components/services-card";

const OurServices = () => {
  return (
    <Section subtitle="تمتع في رحلتك" title="مجموعة من خدماتنا" center>
      <Container>
        <div className="bg-candy-100 rounded-[25px] py-[64px] px-[30px] flex flex-col gap-y-[40px] items-center text-center ">
          {servicesData.map((item) => (
            <ServicesCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurServices;
