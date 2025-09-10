import React from "react";
import { Form } from "@/app/Forms/constants";
import { FormItem } from "./FormItem";

interface FormListProps {
  forms: Form[];
}

export const FormList: React.FC<FormListProps> = ({ forms }) => (
  <div className="w-full max-w-2xl mx-auto px-2">
    
    {/* Background pattern */}
    <div className="z-0 absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:40px_40px]" />
       
    {forms.length === 0 ? (
      <div className="flex h-[200px] w-full items-center justify-center">
        <div className="flex h-[200px] w-[350px] items-center justify-center rounded-md border border-dashed text-sm">
          <p className="font-text colour-text">No forms</p>
        </div>
      </div>
    ) : (
      forms
        .slice()
        .sort((a) => (a.status === "Closed" ? 1 : -1))
        .map(form => (
          <FormItem key={form.title} form={form} />
      ))
    )}
  </div>
);
