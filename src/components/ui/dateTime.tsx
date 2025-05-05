import React, { useState } from "react";
import { cn } from "@/lib/utils";
type DateTimeProps = {
  label: string;
  id?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateTime: React.FC<DateTimeProps> = ({
  className,
  label,
  id,
  // value,
  // onChange,
  ...props
}) => {
  const inputId = id ?? label.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="relative w-full">
      <input
        id={inputId}
        type="datetime-local"
        className="text-popover-foreground data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground
        selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex gap-4 h-9 w-full 
        min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow]
         outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm 
         pr-12 pl-4 appearance-none focus:outline-none"
        //remaining css styles in globals.css
        // value={value}
        {...props}
      />
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          className="w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
          />
        </svg>
      </div>
    </div>
  );
};

export default DateTime;
