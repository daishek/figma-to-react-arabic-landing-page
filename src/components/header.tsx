import Button from "./button";
import Navbar from "./navbar";
import ArrowIcon from "../assets/arrow.svg";

const Header = () => {
  return (
    <header
      className="
            text-white
            bg-mobile-hero
            bg-no-repeat
            bg-cover
            bg-center

            md:min-h-[870px]
            md:bg-desktop-hero

            pt-[36px]
            px-[20px]
            md:pt-[48px]
            md:px-[60px]
        "
    >
      <Navbar />
      <div className="mt-[80px] md:mt-[190px] text-center">
        <h1 className="heading-1 mb-[28px]">سافر معنا إلى العالم</h1>
        <p className="font-body mb-[36px] md:max-w-[581px] md:mx-auto">
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان وبخدمات مخصصة لك
          ولعائلتك
        </p>
        <div className="w-full md:w-[222px] mx-auto">
          <Button full primary>
            احجز الآن
            <img
              src={ArrowIcon}
              className="mr-[12px] h-[30px] w-[30px]"
              alt="icon"
            />
          </Button>
        </div>
        <div className="mt-[92px] grid place-content-center relative ">
          <div className="absolute -top-10 left-1/2 translate-x-[calc(-50%-79px)] md:translate-x-[calc(-50%-127px)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="121"
              height="150"
              viewBox="0 0 121 150"
              fill="none"
            >
              <g filter="url(#filter0_d_505_290)">
                <path
                  d="M87.8857 102.269C82.6334 106.714 75.9635 107.82 70.8726 112.066C70.7531 112.166 70.8808 112.601 70.9356 113.358C72.1354 113.187 73.3821 113.256 74.4482 112.829C79.3577 110.868 84.3029 108.978 89.0599 106.663C93.5681 104.477 93.9433 101.858 90.7084 97.908C87.7555 94.3007 84.7345 90.7658 81.7133 87.222C81.3875 86.844 80.8655 86.6474 79.773 85.9163C80.3856 92.0489 84.9915 95.1391 87.3196 100.317C82.711 99.3217 78.618 98.666 74.6562 97.5356C61.2591 93.7234 49.4123 87.2025 40.5792 75.7918C28.9134 60.7182 28.0011 41.7347 38.0207 25.4444C38.0967 25.3273 38.1814 25.21 38.2401 25.0842C38.8521 23.8083 40.7935 22.3504 38.7252 21.1626C36.8664 20.0962 36.2346 22.3441 35.4751 23.5868C23.5092 43.2875 26.0963 66.0151 42.2184 82.3089C52.5769 92.7767 65.2838 98.4099 79.3805 101.016C82.1999 101.541 85.0505 101.842 87.8854 102.251L87.8857 102.269Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_505_290"
                  x="0.0236816"
                  y="0.883636"
                  width="120.814"
                  height="148.475"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="14" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.145833 0 0 0 0 0.145833 0 0 0 0 0.145833 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_505_290"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_505_290"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <p className="body-2">تابع للأسفل</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="109"
            viewBox="0 0 88 109"
            fill="none"
          >
            <g filter="url(#filter0_d_505_302)">
              <rect x="28" y="20" width="32" height="53" rx="16" fill="white" />
            </g>
            <rect x="42" y="31" width="4" height="11" rx="2" fill="#191919" />
            <defs>
              <filter
                id="filter0_d_505_302"
                x="0"
                y="0"
                width="88"
                height="109"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="14" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.145833 0 0 0 0 0.145833 0 0 0 0 0.145833 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_505_302"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_505_302"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
