"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const Courses = () => {
  const [courseDetails, setCourseDetails] = useState({});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCourseDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", courseDetails);
  };
  return (
    <div className="w-full flex justify-end p-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"} className="text-lg">
            Create a Course
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a Course</DialogTitle>
            <DialogDescription>Please fill the details below</DialogDescription>
          </DialogHeader>
          <div>
            <form
              onSubmit={handleSubmit}
              className="w-full h-full mx-auto p-6 text-white rounded-2xl shadow-md space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* {createCourseFields?.map((field) => {
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
                        value={
                          createCourseFields[convertToCamelCase(field.label)]
                        }
                        onChange={handleChange}
                        options={field.options}
                      />
                    </div>
                  );
                })} */}
                <div className="h-[4rem] flex items-end justify-center">
                  <Label></Label>
                  {/* <Button>
                    <UploadFile />
                  </Button> */}
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x-2 gap-1 px-4 py-2 rounded-lg">
                <Button size={"lg"} variant={"secondary"} type="submit">
                  Save Changes
                </Button>
                <Button size={"lg"} variant={"secondary"}>
                  Publish Course
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Courses;
