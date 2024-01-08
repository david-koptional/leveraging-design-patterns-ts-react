import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { projectDetailsFields as formFields } from "./data";
import { FormField } from "./types";
import { renderField } from "./util";

const FormBuilder: React.FC<{ fields: FormField[] }> = ({ fields }) => {
  const methods = useForm();

  const { watch } = methods;

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const city = watch("city");

  console.log(city);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-[300px] flex flex-col gap-4 mx-auto"
      >
        {fields.map((field) => renderField(field, watch, 0))}
      </form>
    </FormProvider>
  );
};

export const CompositeApp = () => {
  return <FormBuilder fields={formFields} />;
};
