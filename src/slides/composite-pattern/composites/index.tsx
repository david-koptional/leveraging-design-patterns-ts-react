import React from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";
import { CompositeField } from "../types"; // Assuming these are correctly defined
import { renderField } from "../util";
import { cn } from "@/lib/utils";

interface FormCompositeProps {
  field: CompositeField;
  watch: UseFormWatch<FieldValues>;
}

export const FormComposite: React.FC<FormCompositeProps & { level: number }> = ({
  field,
  watch,
  level,
}) => {
  // the operation is to render - returning JSX
  return (
    <fieldset>
      <legend className={cn(`flex flex-col gap-2 text-md ml-[${level}px]`)}>{field.label}</legend>
      {/* also calls renders the children */}
      {field.fields.map((f) => renderField(f, watch, (level = level + 1)))}
    </fieldset>
  );
};
