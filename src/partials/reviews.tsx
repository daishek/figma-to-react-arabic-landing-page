import { reviewsData } from "../assets/data";
import Container from "../components/container";
import ReviewCard from "../components/review-card";
import Section from "../components/section";

const Reviews = () => {
  return (
    <Section subtitle="قالوا عنا" title="آراء مجموعة من عملائنا" center>
      <Container>
        <div className="grid md:grid-cols-3 gap-y-[32px] md:gap-x-[24px] relative">
          <div className="hidden md:block absolute left-[200px] -top-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="105"
              height="61"
              viewBox="0 0 105 61"
              fill="none"
            >
              <path
                d="M9.24656 48.0406C22.4147 29.9512 40.1944 21.0141 61.7868 18.2729C62.1004 17.5865 62.57 16.6523 62.9392 15.6767C67.0701 4.97107 73.8231 0.357298 85.1508 0.610439C90.2448 0.720233 95.1362 1.88629 99.7436 4.10065C100.967 4.68774 102.212 5.4294 103.134 6.41617C104.662 8.06284 104.316 9.44841 102.117 10.1603C95.8995 4.81882 82.3355 3.33524 75.2425 7.23375C70.9361 9.59591 68.7553 13.5548 67.2324 18.4216C68.3922 18.8003 69.3828 19.0553 70.3091 19.4485C74.9426 21.3798 79.6722 23.1318 84.1501 25.3888C86.2619 26.4581 88.0807 28.3466 89.687 30.1703C92.5653 33.4226 93.4886 37.1985 91.4594 41.3472C89.4233 45.5224 85.0918 48.1113 80.6138 47.7513C77.1718 47.4745 74.0896 46.2053 71.3968 44.0156C66.592 40.0984 63.4172 35.1234 62.0453 28.9889C61.779 27.784 61.5045 26.584 61.2373 25.4355C46.3089 23.4255 19.142 40.1751 13.9224 51.8662C18.6326 51.532 22.6455 47.9363 27.3734 49.2207C28.2924 51.1692 27.1736 52.0049 25.8487 52.5934C20.542 54.9741 15.2461 57.393 9.87385 59.6001C6.7655 60.8792 5.21785 59.9137 4.7763 56.5801C3.96934 50.4151 3.00458 44.3205 0.512221 38.554C0.146952 37.6974 0.83218 36.3688 1.02749 35.261C2.10555 35.5539 3.70844 35.4939 4.15806 36.1894C5.71461 38.6225 6.94757 41.2791 8.14157 43.9252C8.69457 45.1514 8.85304 46.5534 9.23833 48.0455L9.24656 48.0406ZM67.0133 24.9661C66.7397 32.4019 72.5429 40.6533 78.8016 42.1767C79.8087 42.422 80.9201 42.4833 81.9471 42.3376C84.0693 42.0506 85.4481 40.7051 86.3576 38.765C87.3315 36.6866 86.3065 35.1128 85.0277 33.7886C80.0818 28.6934 73.8519 26.3497 67.0086 24.9578L67.0133 24.9661Z"
                fill="#755AE8"
              />
            </svg>
          </div>
          {reviewsData.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Reviews;
