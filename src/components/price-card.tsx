import { PriceData } from "../assets/data";
import Button from "./button";

const PriceCard: React.FC<PriceData> = ({
  price,
  title,
  description,
  hot,
  features,
}) => {
  return (
    <div
      className={`brutalisme-box py-[36px] px-[24px] 
      ${hot ? "bg-candy-800 text-white" : "bg-rize-300 text-umbra-700"}
      ${!hot ? "md:mt-[48px]" : "md:mb-[48px]"}
        `}
    >
      <p className="font-body mb-[16px]">
        <span className="text-[32px] font-[900]">${price}</span> / للشخص
      </p>
      <h3 className="heading-3 mb-[16px]">{title}</h3>
      <p className="font-body-2">{description}</p>
      <div
        className={`h-[1px] w-full my-[32px] ${
          hot ? "bg-umbra-300" : "bg-umbra-500"
        }`}
      />
      <ul className="space-y-[19px] mb-[44px]">
        {features.map((item) => (
          <li key={item.id} className="flex items-center font-body gap-x-[8px]">
            <span className="h-[25px] w-[25px] rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M12 23C18.6274 23 24 17.8513 24 11.5C24 5.14873 18.6274 0 12 0C5.37258 0 0 5.14873 0 11.5C0 17.8513 5.37258 23 12 23Z"
                  fill="white"
                />
                <path
                  d="M10.0744 16.6428L7.19671 14.087C7.13446 14.032 7.08498 13.9662 7.0512 13.8935C7.01741 13.8208 7 13.7427 7 13.6637C7 13.5848 7.01741 13.5067 7.0512 13.434C7.08498 13.3613 7.13446 13.2955 7.19671 13.2405L8.15101 12.3939C8.27898 12.2812 8.45018 12.2181 8.62838 12.2181C8.80657 12.2181 8.97777 12.2812 9.10574 12.3939L10.8188 13.9165L15.6234 7.27496C15.7225 7.14094 15.8751 7.04723 16.0488 7.01362C16.2225 6.98001 16.4039 7.00915 16.5544 7.09488L17.6903 7.74365C17.7644 7.78512 17.8287 7.83973 17.8793 7.90422C17.9298 7.96871 17.9656 8.04177 17.9845 8.11907C18.0034 8.19637 18.005 8.27634 17.9893 8.35423C17.9736 8.43211 17.9408 8.50634 17.893 8.5725L12.204 16.4393C12.09 16.5933 11.9402 16.7226 11.7653 16.8183C11.5903 16.914 11.3945 16.9736 11.1914 16.993C10.9884 17.0124 10.7832 16.9911 10.5902 16.9306C10.3972 16.8701 10.2212 16.7719 10.0744 16.6428Z"
                  fill="#191919"
                />
              </svg>
            </span>
            {item.label}
          </li>
        ))}
      </ul>
      <Button full ghostDark={!hot} ghostwhite={hot}>
        احجز الآن
        <span className="w-[30px] h-[30px] mr-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
          >
            <circle cx="15.5" cy="15" r="15" fill="white" />
            <path
              d="M16.2426 10.7574L13.4142 13.5858C12.6332 14.3668 12.6332 15.6332 13.4142 16.4142L16.2426 19.2426"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </Button>
    </div>
  );
};

export default PriceCard;
