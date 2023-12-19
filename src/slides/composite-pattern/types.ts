// Component Interface
// Everything is a component. The leaf and the composite
interface FormElement {
  name: string;
  label: string;
  type: "composite" | "leaf";
  condition?: (formData: unknown) => boolean;
}

// This is the leaf. This is the simplest of the components. It has no sub components.
/* The leave still extends the base interface and has a way of 'operating' and this is true no matter where it lands
in the hierarchy.
*/
export interface InputField extends FormElement {
  type: "leaf";
  inputType: "text" | "email" | "password" | "checkbox" | "button" | "switch";
}

/* This is the composite. Typically, the composite has one to 'many' nodes (components). Again, like the leaf, the composite extends the base 
component interface. 
*/
export interface CompositeField extends FormElement {
  type: "composite";
  fields: Array<InputField | CompositeField>;
}

export type FormField = InputField | CompositeField;
