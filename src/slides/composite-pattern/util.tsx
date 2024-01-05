import { UseFormWatch, FieldValues } from "react-hook-form";
import { FormComposite } from "./composites";
import {
  ButtonField,
  CheckboxField,
  EmailField,
  SelectField,
  SwitchField,
  TextField,
} from "./leaves";
import { FormField } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderField = (field: FormField, watch: UseFormWatch<FieldValues>, level: number) => {
  // recursively apply method to everything in the hierarchy
  const shouldDisplay = field.condition ? field.condition(watch()) : true;

  if (!shouldDisplay) return null;

  switch (field.type) {
    case "composite":
      return <FormComposite key={field.name} field={field} watch={watch} level={level} />;
    case "leaf":
      switch (field.inputType) {
        case "text":
          return <TextField key={field.name} {...field} />;
        case "email":
          return <EmailField key={field.name} {...field} />;
        case "button":
          return <ButtonField key={field.name} {...field} />;
        case "checkbox":
          return <CheckboxField key={field.name} {...field} />;
        case "switch":
          return <SwitchField key={field.name} {...field} />;
        case "select":
          return <SelectField key={field.name} {...field} />;
      }
      break;
  }
  return null;
};
