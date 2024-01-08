// Component Interface
// Everything is a component. The leaf and the composite
interface FormElement {
  name: string;
  label: string;
  type: "composite" | "leaf";
  options?:
    | { label: string; value: string }[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ((formData: any) => { label: string; value: string }[]);
  condition?: (formData: unknown) => boolean;
}

// This is the leaf. This is the simplest of the components. It has no sub-components.
export interface InputField extends FormElement {
  type: "leaf";
  inputType: "text" | "email" | "password" | "checkbox" | "button" | "switch" | "select" | "number" | "date" | 'single-select' | 'multi-select' | 'file-upload' | 'detailed-text' ;
}

// This is the composite. Typically, the composite has one to 'many' nodes (components).
export interface CompositeField extends FormElement {
  type: "composite";
  fields: Array<InputField | CompositeField>;
}

// New Types based on the mermaid diagram
export interface MultiSelectField extends InputField {
  type: "leaf";
  inputType: "multi-select";
  // Additional properties specific to MultiSelect
}

export interface SingleSelectField extends InputField {
  type: "leaf";
  inputType: "single-select";
  // Additional properties specific to SingleSelect
}

export interface AddressField extends CompositeField {
  type: "composite";
  // Specific structure for Address
  fields: [InputField, InputField, InputField, InputField, InputField]; // Street, Apt, City, State, Zip
}

export interface DetailedText extends InputField {
  type: "leaf";
  inputType: "text";
  // Additional properties for detailed text input
}

export interface UploadField extends InputField {
  type: "leaf";
  inputType: "file-upload";
  // Properties for file upload
}

// Extending the FormField to include new types
export type FormField = InputField | CompositeField | MultiSelectField | SingleSelectField | AddressField | DetailedText | UploadField;
