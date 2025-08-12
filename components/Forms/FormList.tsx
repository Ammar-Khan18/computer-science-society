import React from "react";
import { Form } from "@/app/Forms/constants";
import { FormItem } from "./FormItem";

interface FormListProps {
  forms: Form[];
}

export const FormList: React.FC<FormListProps> = ({ forms }) => (
  <div className="w-full max-w-2xl mx-auto px-2">
    {forms.map((form, idx) => (
      <FormItem key={form.title} form={form} />
    ))}
  </div>
);
