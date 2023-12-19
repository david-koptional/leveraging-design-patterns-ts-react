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
  return (
    <fieldset>
      <legend
        className={cn(`flex flex-col gap-2 text-md`, {
          "text-lg font-bold": level === 0,
        })}
      >
        {field.label}
      </legend>
      {field.fields.map((f) => renderField(f, watch, (level = level + 1)))}
    </fieldset>
  );
};
