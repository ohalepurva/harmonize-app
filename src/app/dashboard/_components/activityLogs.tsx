"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "./header";
import { Button } from "@/components/ui/button";
import FormField from "@/components/ui/customFormField";
import { Label } from "@/components/ui/label";
import { convertToCamelCase, formatDateTime } from "@/lib/utils";
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
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
  console.log({ newUserActivity });
  return (
    <div className={`w-full h-full p-1`}>
      {/* <Header title={title} /> */}
      <div>
        <Card className="p-2 bg-[#2f3a5a] rounded-xl m-3 h-full">
          <CardHeader className="p-3">
            <CardTitle>{"formatDateTime(Date.now())"}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <div className="w-full flex gap-[1.5rem]">
              <div className="w-1/2">
                {/* {activityTableLogs?.map((field) => {
                  const name = userActivityLogFields.filter(
                    (item) => item.label === field.label
                  )[0].key;
                  return (
                    <div key={convertToCamelCase(field.label)}>
                      <Label className="text-left tracking-wider h-[2rem] p-0.5 text-base flex justify-between items-center">
                        {field.label}
                      </Label>
                      <FormField
                        type={field.type}
                        id={name}
                        name={name}
                        label={field.label}
                        value={newUserActivity[name]}
                        onChange={handleChange}
                        options={field.options}
                        required
                      />
                    </div>
                  );
                })} */}
              </div>
              <div className="w-1/2">
                <Label className="text-left tracking-wider h-[2rem] p-0.5 text-base flex justify-between items-center">
                  {"Enquiry Message"}
                </Label>
                <Textarea
                  placeholder="Type your message here."
                  value={newUserActivity.enquiryMessage}
                  onChange={handleChange}
                  className="h-24"
                />
              </div>
            </div>
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
      <div>
        {userActivityLogs?.map((activity, index) => {
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
                  <AccordionContent className="pr-3 m-3">
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
                            <Label className="text-left tracking-wider h-[2rem] p-0.5 text-base">
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
    </div>
  );
};

export default ActivityLogs;
