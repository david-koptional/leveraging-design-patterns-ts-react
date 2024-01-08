import { FormField } from "./types";

export const projectDetailsFields: FormField[] = [
  {
    type: "composite",
    name: "projectDetails",
    label: "Project Details",
    fields: [
      {
        type: "composite",
        name: "multiSelectOptions",
        label: "Select Activities",
        fields: [
          { type: "leaf", name: "deliver", label: "Deliver", inputType: "checkbox" },
          { type: "leaf", name: "receive", label: "Receive", inputType: "checkbox" },
          { type: "leaf", name: "move", label: "Move", inputType: "checkbox" },
        ],
      },
      {
        type: "composite",
        name: "deliveryDetails",
        label: "Delivery Details",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        condition: (formData: any) => formData.deliver || formData.receive,
        fields: [
          {
            type: "leaf",
            name: "timeOption",
            label: "Time of Delivery",
            inputType: "select",
            options: [
              { label: "Business Hours", value: "businessHours" },
              { label: "Overtime", value: "overtime" },
              { label: "Double Time", value: "doubleTime" },
            ],
          },
          {
            type: "leaf",
            name: "locationOption",
            label: "Delivery Location",
            inputType: "select",
            options: [
              { label: "Warehouse", value: "warehouse" },
              { label: "Job Site", value: "jobSite" },
              { label: "Direct To Site", value: "directToSite" },
              // ... other locations
            ],
          },
        ],
      },
      {
        type: "leaf",
        name: "moreInfo",
        label: "Additional Information",
        inputType: "detailed-text",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        condition: (formData: any) => formData.move,
      },
      // ... additional fields as per the diagram
    ],
  },
];
