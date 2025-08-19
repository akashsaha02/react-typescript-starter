import CommonWrapper from "@/common/CommonWrapper";
import FormA from "@/components/DemoForm/FormA";
import FormB from "@/components/DemoForm/FormB";

const Form = () => {
  return (
    <CommonWrapper className="flex items-center justify-center gap-12 h-screen">
      <div className="w-full">
        <h1>Form A: </h1>
        <FormA />
      </div>
      <div className="w-full">
        <h2>Form B: </h2>
        <FormB />
      </div>
    </CommonWrapper>
  );
};

export default Form;
