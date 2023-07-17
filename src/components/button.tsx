interface ButtonProps {
  primary?: boolean;
  ghostDark?: boolean;
  ghostwhite?: boolean;
  dark?: boolean;
  full?: boolean;
  lg?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  full,
  ghostDark,
  ghostwhite,
  dark,
  lg,
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
        ${dark ? "bg-umbra-700 text-white border border-umbra-700" : ""} 
        ${full ? "w-full" : ""} 
        ${lg ? "py-[16px]" : "py-[12px]"} 
      rounded-[15px] body font-[700] px-[30px] flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
