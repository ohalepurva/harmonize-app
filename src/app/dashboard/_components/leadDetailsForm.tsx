"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { convertToCamelCase } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Header from "./header";
import { fields } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Calendar from "@/components/ui/calendar";
import { useForm } from "react-hook-form";

const LeadDetailsForm = ({ title, details, setItem }) => {
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

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Submitted Data:", item);
  // };

  const formSchema = z.object({
    first_name: z.string().nonempty({
      message: "First Name can not be empty.",
    }),
    last_name: z.string().nonempty({
      message: "Last Name can not be empty.",
    }),
    phone_primary: z.number().min(10, {
      message: "Phone number must be 10 digits.",
    }),
    phone_secondary: z
      .number()
      .min(10, {
        message: "Phone number must be 10 digits.",
      })
      .optional(),
    status: z.string().nonempty({
      message: "Status can not be empty.",
    }),
    email: z.string().email({
      message: "Invalid email id",
    }),
    dob: z.date(),
    location: z.string().nonempty({
      message: "Location can not be empty.",
    }),
    course_name: z.string().nonempty({
      message: "Course can not be empty.",
    }),
    mode: z.string().nonempty({
      message: "Mode of class can not be empty.",
    }),
    gender: z.string().nonempty({
      message: "Gender can not be empty.",
    }),
    source: z.string().optional(),
    pastExperience: z.string().optional(),
    whyMusic: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      first_name: "",
      last_name: "",
      phone_primary: 0,
      phone_secondary: 0,
      status: "",
      email: "",
      dob: new Date(),
      location: "",
      course_name: "",
      mode: "",
      gender: "",
      source: "",
      pastExperience: "",
      whyMusic: "",
    },
  });

  useEffect(() => {
    if (details && Object.keys(details).length > 0) {
      form.reset({
        ...details,
        dob: details.dob ? new Date(details.dob) : new Date(),
      });
    }
  }, [details]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const getFieldComponent = (item, field) => {
    switch (item.type) {
      case "input":
        return <Input {...field} />;
      case "select":
        return (
          <Select {...field}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="--Select--" />
            </SelectTrigger>
            <SelectContent>
              {item.options?.map((opt) => {
                return (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        );
      case "date":
        return (
          <Calendar
            value={field.value?.toISOString().split("T")[0]}
            onChange={(e) => field.onChange(new Date(e.target.value))}
            label={item.label}
          />
        );
    }
  };
  return (
    <div className={`flex items-center h-full p-1 `}>
      <Card className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full h-full mx-auto p-6 text-white rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-4">
              {fields?.map((item) => {
                return (
                  <FormField
                    key={item.key}
                    control={form.control}
                    name={item.key}
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>{item.label}</FormLabel>
                          <FormControl>
                            {getFieldComponent(item, field)}
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                );
              })}
            </div>
          </form>
        </Form>
        {/* ) : (
          <p className="text-gray-500 w-full h-full flex justify-center items-center text-2xl">
            Select a user to see details.
          </p>
        )}*/}
      </Card>
    </div>
  );
};

export default LeadDetailsForm;
