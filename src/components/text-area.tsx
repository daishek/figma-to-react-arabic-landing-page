interface TextAreaProps {
  placeholder?: string;
}
const TextArea: React.FC<TextAreaProps> = ({ placeholder }) => {
  return (
    <textarea
      className="w-full rounded-16 outline-none border-[1.5px] border-umbra-700 py-[16px] px-[12px] h-[120px] flex"
      placeholder={placeholder}
    />
  );
};

export default TextArea;
