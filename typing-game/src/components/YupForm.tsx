import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ReactNode } from "react";

interface FormField {
  name: string;
  label: string;
  type: string;
}

interface FormProps {
  fields: FormField[];
  schema: yup.AnyObjectSchema;
  onSubmit: (data: any) => void;
  children?: ReactNode;
}

function YupForm({ fields, schema, onSubmit, children }: FormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<any>({ resolver: yupResolver(schema) });
  const onError = (err: any) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input id={field.name} type={field.type} {...register(field.name)} />
          <div>{errors[field.name]?.message as ReactNode}</div>
        </div>
      ))}
      {children}
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default YupForm;
