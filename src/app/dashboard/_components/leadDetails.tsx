"use client";
import React, { useState } from "react";
import { convertToCamelCase } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Header from "./header";
import { fields } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/formField";

const LeadDetails = ({ title, item, setItem }) => {
  const [formData, setFormData] = useState(item);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", item);
  };
  return (
    <div className={`w-full h-full p-1`}>
      <Header title={title} />
      {item ? (
        <form
          onSubmit={handleSubmit}
          className="w-full h-full mx-auto p-6 text-white rounded-2xl shadow-md space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields?.map((field) => {
              const name = convertToCamelCase(field.label);
              return (
                <div key={convertToCamelCase(field.label)}>
                  <Label className="text-left tracking-wider h-[2rem] p-0.5 text-base flex justify-between items-center">
                    {field.label}
                  </Label>
                  <FormField
                    type={field.type}
                    id={name}
                    label={field.label}
                    value={item[convertToCamelCase(field.label)]}
                    onChange={handleChange}
                    options={field.options}
                  />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 divide-x-3 gap-1 px-4 py-2 rounded-lg">
            <Button size={"sm"} variant={"secondary"} type="submit">
              Save Changes
            </Button>
            <Button size={"sm"} variant={"secondary"}>
              Schedule Demo
            </Button>
            <Button size={"sm"} variant={"secondary"}>
              Enroll Student
            </Button>
          </div>
        </form>
      ) : (
        <p className="text-gray-500 w-full h-full flex justify-center items-center text-2xl">
          Select a user to see details.
        </p>
      )}
    </div>
  );
};

export default LeadDetails;
