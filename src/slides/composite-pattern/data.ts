/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormField } from "./types";

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const formFields: FormField[] = [
  {
    type: "composite",
    name: "personalInfo",
    label: "Personal Information",
    fields: [
      { type: "leaf", name: "firstName", label: "First Name", inputType: "text" },
      { type: "leaf", name: "lastName", label: "Last Name", inputType: "text" },
      { type: "leaf", name: "email", label: "Email", inputType: "email" },
    ],
  },
  {
    type: "composite",
    name: "location",
    label: "Location Information",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    condition: (formData: any) =>
      formData.firstName && formData.lastName && isValidEmail(formData.email),
    fields: [
      {
        type: "composite",
        name: "cityInfo",
        label: "City Information",
        fields: [
          {
            type: "leaf",
            name: "city",
            label: "City",
            inputType: "select",
            options: [
              { label: "New York", value: "New York" },
              { label: "Los Angeles", value: "Los Angeles" },
              { label: "Chicago", value: "Chicago" },
              // Add more cities as needed
            ],
          },
          {
            type: "composite",
            name: "zipcodeInfo",
            label: "Zip Code",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            condition: (formData: any) => formData.city,
            fields: [
              {
                type: "leaf",
                name: "zipcode",
                label: "Zip Code",
                inputType: "select",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options: (formData: any) => {
                  switch (formData.city) {
                    case "New York":
                      return [{ label: "10001", value: "10001" } /* More NY zip codes */];
                    case "Los Angeles":
                      return [{ label: "90001", value: "90001" } /* More LA zip codes */];
                    case "Chicago":
                      return [{ label: "60601", value: "60601" } /* More Chicago zip codes */];
                    default:
                      return [];
                  }
                },
              },
            ],
          },
        ],
      },
    ],
  },
  { type: "leaf", name: "submit", label: "Submit", inputType: "button" },
];

// App implementation remains the same
