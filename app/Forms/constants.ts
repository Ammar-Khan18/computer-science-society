export type FormStatus = "Open" | "Closed";

export interface Form {
  title: string;
  description: string;
  link: string;
  status: FormStatus;
}

export const forms: Form[] = [
  {
    title: "Form 1",
    description: "This is the first form",
    link: "https://www.google.com",
    status: "Open",
  },
  {
    title: "Form 2",
    description: "This is the second form",
    link: "https://www.google.com",
    status: "Open",
  },
  {
    title: "Form 3",
    description: "This is the third form",
    link: "https://www.google.com",
    status: "Closed",
  },
  {
    title: "Form 4",
    description: "This is the fourth form with a long description, much more will be added when this will be done",
    link: "https://www.google.com",
    status: "Closed",
  },
];
