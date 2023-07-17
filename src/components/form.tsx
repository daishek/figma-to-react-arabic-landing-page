import Button from "./button";
import FormItem from "./form-item";
import Input from "./input";
import TextArea from "./text-area";

const Form = () => {
  return (
    <div className="brutalisme-box py-[44px] px-[20px] bg-rize-300 space-y-[24px]">
      <FormItem label="الاسم">
        <Input placeholder="يرجى تسجيل اسمك الكامل" />
      </FormItem>
      <FormItem label="البريد الإلكتروني">
        <Input placeholder="يرجى تسجيل اسمك الكامل" />
      </FormItem>
      <FormItem label="الموضوع">
        <TextArea placeholder="ما هو السؤال أو المشكلة التي لديك؟" />
      </FormItem>
      <div className="full">
        <Button dark full lg>
          أرسل الرسالة
        </Button>
      </div>
    </div>
  );
};

export default Form;
