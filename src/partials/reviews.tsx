import { reviewsData } from "../assets/data";
import Container from "../components/container";
import ReviewCard from "../components/review-card";
import Section from "../components/section";

const Reviews = () => {
  return (
    <Section subtitle="قالوا عنا" title="آراء مجموعة من عملائنا" center>
      <Container>
        <div className="grid gap-y-[32px]">
          {reviewsData.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Reviews;
