import { pricesData } from "../assets/data";
import Container from "../components/container";
import PriceCard from "../components/price-card";
import Section from "../components/section";

const Price = () => {
  return (
    <Section subtitle="لا تقلق حول التكلفة" title="خطط تناسب ميزانيتك">
      <Container>
        <div className="grid gap-y-[40px]">
          {pricesData.map((item) => (
            <PriceCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Price;
