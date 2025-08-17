export type FormStatus = "Open" | "Closed";

export interface Form {
  title: string;
  description: string;
  link: string;
  status: FormStatus;
}

export const forms: Form[] = [
  {
    title: "Orientation Registration Form",
    description: "This form is for the management team positions, circulated during O `Gala 2025.",
    link: "https://forms.gle/WoPPxGfPCcMmyVMAA",
    status: "Open",
  },
];
