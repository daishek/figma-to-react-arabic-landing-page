interface FormItemProps {
  children: React.ReactNode;
  label: string;
}
const FormItem: React.FC<FormItemProps> = ({ children, label }) => {
  return (
    <fieldset className="gap-y-[14px] grid">
      <label className="text-umbra-700 heading-3">{label}</label>
      {children}
    </fieldset>
  );
};

export default FormItem;
