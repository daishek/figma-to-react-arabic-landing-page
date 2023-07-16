interface ButtonProps {
  primary?: boolean;
  ghostDark?: boolean;
  ghostwhite?: boolean;
  full?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  full,
  ghostDark,
  ghostwhite,
}) => {
  return (
    <button
      className={`
        ${primary ? "bg-rize-600 text-black" : ""} 
        ${
          ghostDark
            ? "bg-transparent text-umbra-700 border border-umbra-700"
            : ""
        } 
        ${ghostwhite ? "bg-transparent text-white border border-white" : ""} 
        ${full ? "w-full" : ""} 
      rounded-[15px] body font-[700] py-[12px] px-[30px] flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
