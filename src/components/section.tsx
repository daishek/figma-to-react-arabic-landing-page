import Container from "./container";

interface SectionProps {
  center?: boolean;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  center = false,
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="mt-[76px] md:mt-[124px]">
      <Container>
        <div
          className={`
              ${center ? "text-center" : ""}
              w-full leading-tight mb-[48px]
          `}
        >
          <p className="font-body text-umbra-300">{subtitle}</p>
          <h2 className="heading-2 text-umbra-700">{title}</h2>
        </div>
      </Container>
      {children}
    </section>
  );
};

export default Section;
