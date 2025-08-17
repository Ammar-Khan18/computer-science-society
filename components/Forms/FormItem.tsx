import React from "react";
import { Form, FormStatus } from "@/app/Forms/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FormItemProps {
  form: Form;
}

const statusColor: Record<FormStatus, "destructive" | "secondary" | "outline" | "secondary"> = {
  Open: "secondary",
  Closed: "destructive",
};

export const FormItem: React.FC<FormItemProps> = ({ form }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 px-3 md:px-4 rounded-lg colour-box-primary shadow mb-4">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-heading text-lg colour-text">{form.title}</span>
        <Badge className="font-text" variant={statusColor[form.status]}>{form.status}</Badge>
      </div>
      <span className="font-text text-[10px] md:text-[12px] text-white text-base">{form.description}</span>
    </div>
    <Button asChild variant="default" className="mt-4 ml-0 md:ml-1 md:mt-0 font-text colour-text">
      <a href={form.link} target="_blank" rel="noopener noreferrer">Open Form</a>
    </Button>
  </div>
);
