import React from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";
import { CompositeField } from "../types"; // Assuming these are correctly defined
import { renderField } from "../util";

export const FormComposite: React.FC<{
  field: CompositeField;
  watch: UseFormWatch<FieldValues>;
}> = ({ field, watch }) => {
  return (
    <fieldset>
      <legend>{field.label}</legend>
      {field.fields.map((f) => renderField(f, watch))}
    </fieldset>
  );
};
