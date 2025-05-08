"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  activityTableLogs,
  LeadStatus,
  userActivityLogFields,
  userActivityLogs,
} from "@/lib/constants";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DateTime from "@/components/ui/dateTime";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { formatDateToDDMonthYYYY } from "@/lib/utils";

const ActivityLogs = ({ title, details, setItem }) => {
  const [newUserActivity, setNewUserActivity] = useState({});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewUserActivity((prev) => ({
      ...prev,
      [name]: value,
      createdBy: "Milton Lance",
      loggedAt: Date.now().toLocaleString(),
      id:
        (userActivityLogs?.length
          ? userActivityLogs?.reduce((acc, curr) => Math.max(acc, curr.id), 0)
          : 0) + 1,
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   details.push({ ...newUserActivity });
  //   console.log("Submitted Data:", newUserActivity);
  //   toast("Changes Saved", {
  //     description: `${formatDateToDDMonthYYYY(new Date.now())}`,
  //   });
  // };

  const formSchema = z.object({
    status: z.string().nonempty({
      message: "Status can not be empty.",
    }),
    enquiryMessage: z.string().nonempty({
      message: "Required",
    }),
    dateOfBirth: z.date(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "",
      enquiryMessage: "",
      dateOfBirth: new Date(),
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    details.push(values);
    console.log("Submitted Data:", values);
    toast("Changes Saved", {
      description: `${formatDateToDDMonthYYYY(new Date.now())}`,
    });
  }

  useEffect(() => {
    if (details && Object.keys(details).length > 0) {
      form.reset({
        ...details,
        dob: details.dob ? new Date(details.dob) : new Date(),
      });
    }
  }, [details]);

  const getFieldComponent = (item, field) => {
    switch (item.type) {
      case "input":
        return <Input {...field} />;
      case "text":
        return <Textarea {...field} className="h-full" />;
      case "select":
        return (
          <Select value={field.value} onValueChange={field.onChange}>
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
      case "dateTime":
        return (
          <DateTime
            value={field.value?.toISOString().split("T")[0]}
            onChange={(e) => field.onChange(new Date(e.target.value))}
            label={item.label}
          />
        );
    }
  };

  console.log({ details, newUserActivity });
  return (
    <div className={`w-full h-full p-1`}>
      <div>
        <Card className="p-2 bg-[#2f3a5a] rounded-xl m-3 h-full">
          <CardHeader className="p-3">
            <CardTitle>{"formatDateTime(Date.now())"}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Form {...form}>
              <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full h-full mx-auto p-6 text-white rounded-2xl"
              >
                <div className="grid grid-cols-2 gap-4">
                  {activityTableLogs?.map((item) => {
                    return (
                      <div
                        className={`${item.type === "text" ? "row-span-2 h-full" : ""} `}
                        key={item.key}
                      >
                        <FormField
                          control={form.control}
                          name={`${item.key}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{item.label}</FormLabel>
                              <FormControl>
                                {getFieldComponent(item, field)}
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    );
                  })}
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Button
              size={"lg"}
              variant="outline"
              onClick={() => {
                form.reset({
                  status: "",
                  enquiryMessage: "",
                  dateOfBirth: new Date(),
                });
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={(e) => onsubmit(e)}
              size={"lg"}
              variant="secondary"
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </div>
      {details?.map((action) => {
        return (
          <div>
            <Accordion
              type="multiple"
              className="rounded-xl pr-3 m-3 border-2 shadow-3xl"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="pl-3 tracking-wider text-md">
                    {action.callbackDateTime}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="pr-3 m-6">
                  <div className={`grid grid-cols-2 auto-cols-auto gap-2`}>
                    {userActivityLogFields?.map(({ key, label }) => {
                      const isLongText =
                        typeof action[key] === "string" &&
                        action[key].length > 30;
                      return (
                        <div
                          key={key}
                          className={`${isLongText ? "row-span-2" : ""}`}
                        >
                          <Label className="text-muted-foreground text-sm text-left tracking-wider h-[2rem] p-0.5 ">
                            {label}
                          </Label>
                          {isLongText ? (
                            <Textarea
                              disabled
                              value={action[key]}
                              className={`h-fit p-2`}
                            />
                          ) : (
                            <p className="mt-1 ml-1">
                              {key === "status"
                                ? LeadStatus[action[key]]
                                : action[key]}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityLogs;
