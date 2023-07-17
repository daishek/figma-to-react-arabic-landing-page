interface InputProps {
  placeholder?: string;
}
const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      className="w-full rounded-16 outline-none border-[1.5px] border-umbra-700 py-[16px] px-[12px]"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
