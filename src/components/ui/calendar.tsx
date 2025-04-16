import React, { useState } from "react";
import { cn } from "@/lib/utils";
type CalendarProps = {
  label: string;
  id?: string;
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Calendar: React.FC<CalendarProps> = ({
  className,
  label,
  id,
  value,
  onChange,
}) => {
  const inputId = id ?? label.replace(/\s+/g, "").toLowerCase();

  return (
    <div>
      <input
        id={inputId}
        type="date"
        value={value}
        onChange={onChange}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
      />
    </div>
  );
};

export default Calendar;
