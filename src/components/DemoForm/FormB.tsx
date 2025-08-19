import CommonForm from "@/common/CommonForm";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fieldsB } from "@/lib/demoForm";
import { submitForm } from "@/store/Slices/FormSlice/FormSlice";
import { generateZodSchema } from "@/utils/generateZodSchema";
import { useEffect } from "react";

const FormB = () => {
  const schema = generateZodSchema(fieldsB);
  const dispatch = useAppDispatch();

  const handleSubmitRedux = (data: unknown) => {
    dispatch(submitForm(data));
  };
  const formData = useAppSelector((state) => state.form);

  useEffect(() => {
    console.log(formData, "form from redux store");
  }, [formData]);
  return (
    <CommonForm
      fields={fieldsB}
      schema={schema}
      onSubmitRedux={handleSubmitRedux}
    />
  );
};

export default FormB;
