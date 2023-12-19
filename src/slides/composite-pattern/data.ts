import { FormField } from "./types";

export const formFields: FormField[] = [
  {
    type: "composite",
    name: "personalInfo",
    label: "Personal Information",
    fields: [
      { type: "input", name: "firstName", label: "First Name", inputType: "text" },
      { type: "input", name: "lastName", label: "Last Name", inputType: "text" },
      { type: "input", name: "email", label: "Email", inputType: "email" },
    ],
  },
  {
    type: "composite",
    name: "addressInfo",
    label: "Address Information",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    condition: (formData: any) => formData.firstName && formData.lastName && formData.email,
    fields: [
      {
        type: "composite",
        name: "primaryAddress",
        label: "Primary Address",
        fields: [
          { type: "input", name: "street", label: "Street", inputType: "text" },
          { type: "input", name: "city", label: "City", inputType: "text" },
          // More fields...
        ],
      },
      {
        type: "composite",
        name: "secondaryAddress",
        label: "Secondary Address",
        fields: [
          { type: "input", name: "secondaryStreet", label: "Street", inputType: "text" },
          { type: "input", name: "secondaryCity", label: "City", inputType: "text" },
          // More fields...
        ],
      },
    ],
  },
  {
    type: "composite",
    name: "preferences",
    label: "Preferences",
    fields: [
      {
        type: "input",
        name: "newsletter",
        label: "Subscribe to Newsletter",
        inputType: "checkbox",
      },
      {
        type: "input",
        name: "details",
        label: "Provide Details",
        inputType: "text",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        condition: (formData: any) => formData.newsletter, // Show this field only if 'newsletter' is checked
      },
      // Add more preferences...
    ],
  },
  { type: "input", name: "submit", label: "Submit", inputType: "button" },
];

// App implementation remains the same
