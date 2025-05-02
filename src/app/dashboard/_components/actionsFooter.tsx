"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ActionsFooter = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 rounded-lg  ${className}`}>
      <Button
        size={"lg"}
        variant={"secondary"}
        type="submit"
        onClick={() =>
          toast("Changes Saved", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Save Changes
      </Button>
      <Button
        size={"lg"}
        variant={"secondary"}
        onClick={() =>
          toast("Success !!", {
            description:
              "Demo scheduled on Sunday, December 03, 2023 at 9:00 AM",
            // action: {
            //   label: "Undo",
            //   onClick: () => console.log("Undo"),
            // },
          })
        }
      >
        Schedule Demo
      </Button>
      <Button
        size={"lg"}
        variant={"secondary"}
        onClick={() =>
          toast("Student has been enrolled", {
            description: "Congratulations !!",
            // action: {
            //   label: "Undo",
            //   onClick: () => console.log("Undo"),
            // },
          })
        }
      >
        Enroll Student
      </Button>
    </div>
  );
};

export default ActionsFooter;
