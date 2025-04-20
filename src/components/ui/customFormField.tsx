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
  name?: string | number;
  onChange: Function;
  options?: Array<string | number | Object>;
  id?: string;
  type: React.ElementType;
  className?: string;
  title?: string;
  required?: boolean;
}
const CustomFormField = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  type: Component,
  className = "",
  title = "",
  required = false,
}: FormFieldType) => {
  return (
    <Component
      key={id ? id : convertToCamelCase(label)}
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      options={options}
      className={className}
      title={title}
      required={required}
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

export default CustomFormField;
