import { servicesData } from "../assets/data";
import Container from "../components/container";
import Section from "../components/section";
import ServicesCard from "../components/services-card";

const OurServices = () => {
  return (
    <Section subtitle="تمتع في رحلتك" title="مجموعة من خدماتنا" center>
      <Container>
        <div className="relative bg-candy-100 rounded-[25px] py-[64px] px-[30px] flex flex-col gap-y-[40px] items-center text-center ">
          <div className="absolute top-[-10px] left-[15%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="109"
              viewBox="0 0 65 109"
              fill="none"
            >
              <path
                d="M20.0381 101.964C22.587 92.8547 20.7637 83.1834 25.5431 74.6298C29.1134 75.9854 29.3117 78.6194 28.1579 80.4976C26.5338 83.1603 26.6347 85.8776 26.4792 88.6488C26.1971 93.7865 26.0606 98.933 25.9053 104.068C25.7612 108.853 24.2462 109.931 20.1183 107.967C14.5934 105.348 9.1025 102.647 3.6062 99.9556C2.54674 99.4356 1.55947 98.7663 0.393021 98.0812C3.71881 95.5362 4.33013 95.6525 16.9066 101.007C16.5847 99.6294 16.4554 98.5312 16.0817 97.5322C9.00532 78.6417 9.34988 60.0459 18.3281 41.8181C22.1615 34.0251 27.2953 27.3664 35.3627 23.7597C37.5983 22.7597 38.4236 21.0847 39.0823 19.018C41.0936 12.8002 44.5289 7.52086 49.3382 3.20186C50.5676 2.09649 52.006 1.24165 53.7098 0.670496C48.8446 6.98854 43.3125 12.736 41.8126 21.2349C42.9876 21.2861 43.9969 21.3421 45.0076 21.3734C54.1539 21.6336 61.2321 27.3497 63.6139 36.3905C65.6967 44.3228 61.8748 51.4325 54.4203 53.4951C46.0548 55.8149 38.3844 51.54 36.6509 43.3017C36.0402 40.3999 36.1609 37.3144 36.0817 34.3159C36.0378 32.6032 36.2675 30.8724 36.404 28.6651C32.0591 30.1771 29.2279 32.9997 26.8394 36.2358C17.4373 49.0007 13.4894 63.4483 14.7951 79.269C15.2114 84.3696 16.5177 89.4051 17.6259 94.4136C18.1884 96.9804 19.2246 99.4419 20.049 101.945L20.0381 101.964ZM50.9468 26.8424C48.8664 26.7068 45.651 26.3391 42.424 26.4118C41.5613 26.429 40.1384 27.6764 39.9696 28.5484C39.0011 33.7686 38.3692 39.0587 40.2517 44.228C41.9467 48.8656 46.993 51.267 52.2527 50.0879C57.271 48.9587 60.2334 45.2418 59.7775 40.233C59.2847 34.7808 56.4115 30.7164 50.9413 26.852L50.9468 26.8424Z"
                fill="#755AE8"
              />
            </svg>
          </div>
          {servicesData.map((item) => (
            <ServicesCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurServices;
