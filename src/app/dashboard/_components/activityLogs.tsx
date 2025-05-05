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
import { useState } from "react";
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

const ActivityLogs = ({ title, details, setItem }) => {
  const [newUserActivity, setNewUserActivity] = useState({});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    // setItem((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // activityTableLogs?.push(...newUserActivity);
    console.log("Submitted Data:", newUserActivity);
  };

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
    console.log(values);
  }
  const getFieldComponent = (item) => {
    switch (item.type) {
      case "input":
        return <Input />;
      case "text":
        return <Textarea className="h-full" />;
      case "select":
        return (
          <Select>
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
        return <DateTime label={item.label} />;
    }
  };

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
                onSubmit={form.handleSubmit(onSubmit)}
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
                                {getFieldComponent(item)}
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
            <Button size={"lg"} variant="outline">
              Cancel
            </Button>
            <Button
              onClick={() =>
                toast("Changes Saved", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  // action: {
                  //   label: "Undo",
                  //   onClick: () => console.log("Undo"),
                  // },
                })
              }
              size={"lg"}
              variant="secondary"
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </div>
      {details && (
        <div>
          {details?.map((activity, index) => {
            // const date = formatDateTime(activity.loggedAt);
            const date = activity.loggedAt.toString().slice(0, 10);
            return (
              <Accordion
                type="multiple"
                key={index}
                className="rounded-xl pr-3 m-3 border-2 shadow-3xl"
              >
                {date && (
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <p className="pl-3 tracking-wider text-md">{date}</p>
                    </AccordionTrigger>
                    <AccordionContent className="pr-3 m-6">
                      <div className={`grid grid-cols-2 auto-cols-auto gap-2`}>
                        {userActivityLogFields?.map(({ key, label }) => {
                          const isLongText =
                            typeof activity[key] === "string" &&
                            activity[key].length > 30;
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
                                  value={activity[key]}
                                  className={`h-fit p-2`}
                                />
                              ) : (
                                <p className="mt-1 ml-1">{activity[key]}</p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ActivityLogs;
