import { TripData } from "../assets/data";

const TripCard: React.FC<TripData> = ({ title, description, image }) => {
  return (
    <div className="relative w-full">
      <img className="w-[235px] md:w-[380px]" src={image} alt={title} />
      <div className="absolute w-full bottom-0 p-[12px]">
        <div className="bg-white w-full rounded-16 px-[12px] pt-[21px] pb-[17px]">
          <h4 className="heading-4 leading-tight mb-1">{title}</h4>
          <p className="font-body-2 text-umbra-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
