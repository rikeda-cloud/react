"use client";

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
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onError = (err: any) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
          <input
            id={field.name}
            type={field.type}
            {...register(field.name)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors[field.name] && (
            <div className="text-red-500 text-xs italic mt-1">{errors[field.name]?.message as ReactNode}</div>
          )}
        </div>
      ))}
      {children}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default YupForm;
