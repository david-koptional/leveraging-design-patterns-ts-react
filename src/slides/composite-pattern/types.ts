interface BaseField {
  name: string;
  label: string;
  type: "composite" | "input";
  condition?: (formData: unknown) => boolean;
}

export interface InputField extends BaseField {
  type: "input";
  inputType: "text" | "email" | "password" | "checkbox" | "button" | "switch";
}

export interface CompositeField extends BaseField {
  type: "composite";
  fields: Array<InputField | CompositeField>;
}

export type FormField = InputField | CompositeField;
