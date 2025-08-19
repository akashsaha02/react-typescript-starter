import CommonForm from "@/common/CommonForm";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fieldsA } from "@/lib/demoForm";
import { submitForm } from "@/store/Slices/FormSlice/FormSlice";
import { generateZodSchema } from "@/utils/generateZodSchema";
import { useEffect } from "react";

const FormA = () => {
  const schema = generateZodSchema(fieldsA);
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
      fields={fieldsA}
      schema={schema}
      onSubmitRedux={handleSubmitRedux}
    />
  );
};

export default FormA;
