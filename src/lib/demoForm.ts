export const fieldsA = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
];

export const fieldsB = [
  { name: "phone", label: "Phone", type: "number", required: true },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["Male", "Female", "Other"],
    required: true,
  },
  {
    name: "country",
    label: "Country",
    type: "select",
    options: ["USA", "UK"],
    required: true,
  },
];
