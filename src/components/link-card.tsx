import { LinksDataProps } from "../assets/data";

const LinkCard: React.FC<LinksDataProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="heading-3 mb-[28px]">{title}</h3>
      <ul className="space-y-[20px]">
        {links.map((link) => (
          <li className="font-body text-umbra-400" key={link.id}>
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkCard;
