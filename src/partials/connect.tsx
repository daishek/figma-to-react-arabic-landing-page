import Form from "../components/form";
import Container from "../components/container";
import Section from "../components/section";
import { infoData } from "../assets/data";
import InfoCard from "../components/info-card";

const Connect = () => {
  return (
    <Section subtitle="هل لديك سؤال؟" title="يسعدنا التواصل معك">
      <Container>
        <div className="grid md:grid-cols-2 gap-y-[56px] md:gap-x-[64px]">
          <Form />
          <div className="flex flex-col gap-y-[40px] items-center text-center ">
            {infoData.map((item) => (
              <InfoCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Connect;
