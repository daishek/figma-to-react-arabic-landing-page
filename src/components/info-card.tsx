import { InfoDataType } from "../assets/data";

const InfoCard: React.FC<InfoDataType> = ({ title, description, image }) => {
  return (
    <div className="">
      <img src={image} alt={title} className="w-[140px] mx-auto mb-[28px] " />
      <h3 className="heading-3 text-umbra-700 mb-[20px] leading-tight">
        {title}
      </h3>
      <p className="font-body-2 text-umbra-500 leading-tight">{description}</p>
    </div>
  );
};

export default InfoCard;
