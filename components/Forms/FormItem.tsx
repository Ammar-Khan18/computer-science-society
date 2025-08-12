import React from "react";
import { Form, FormStatus } from "@/app/Forms/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FormItemProps {
  form: Form;
}

const statusColor: Record<FormStatus, "destructive" | "default" | "outline" | "secondary"> = {
  Open: "default",
  Closed: "destructive",
};

export const FormItem: React.FC<FormItemProps> = ({ form }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 px-3 md:px-4 rounded-lg colour-box-primary shadow mb-4">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="font-heading text-lg font-bold colour-text">{form.title}</span>
        <Badge variant={statusColor[form.status]}>{form.status}</Badge>
      </div>
      <span className="font-text text-white text-base">{form.description}</span>
    </div>
    <Button asChild variant="default" className="mt-4 md:mt-0">
      <a href={form.link} target="_blank" rel="noopener noreferrer">Open Form</a>
    </Button>
  </div>
);
