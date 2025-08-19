// src/components/CommonForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
}

interface Props<T> {
  fields: FieldConfig[];
  schema: ZodSchema<T>;
  onSubmitRedux: (data: T) => void;
}

const CommonForm = <T extends Record<string, unknown>>({
  fields,
  schema,
  onSubmitRedux,
}: Props<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: T) => {
    onSubmitRedux(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          {field.type === "select" ? (
            <select
              {...register(field.name as import("react-hook-form").Path<T>)}
              className="border px-3 py-2 rounded w-full"
            >
              <option value="">{field.placeholder}</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              {...register(field.name as import("react-hook-form").Path<T>)}
              placeholder={field.placeholder}
              className="border px-3 py-2 rounded w-full"
            />
          )}
          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {typeof errors[field.name]?.message === "string"
                ? (errors[field.name]?.message as string)
                : ""}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CommonForm;
