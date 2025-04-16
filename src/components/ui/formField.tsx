"use client";

import { convertToCamelCase } from "@/lib/utils";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface FormFieldType {
  label: string;
  value: string | Object | number;
  onChange: Function;
  options?: Array<string | number | Object>;
  id?: string;
  type: React.ElementType;
  className?: string;
  title?: string;
}
const FormField = ({
  id,
  label,
  value,
  onChange,
  options,
  type: Component,
  className = "",
  title = "",
}: FormFieldType) => {
  return (
    <Component
      key={id ? id : convertToCamelCase(label)}
      label={label}
      value={value}
      onChange={onChange}
      options={options}
      className={className}
      title={title}
    >
      {options && (
        <>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="-- Select --" />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => {
              return (
                <SelectItem
                  key={option}
                  value={option.toString().toLowerCase()}
                >
                  {option}
                </SelectItem>
              );
            })}
          </SelectContent>
        </>
      )}
      {/* {title && <span>{title}</span>} */}
    </Component>
  );
};

export default FormField;
