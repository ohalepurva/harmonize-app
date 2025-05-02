import { Controller } from "react-hook-form";
import Calendar from "./calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Input } from "./input";

export const fieldTypeToComponentMap = {
  input: ({ field, control }) => (
    <Controller
      name={field.key}
      control={control}
      render={({ rhfField, fieldConfig }) => (
        <Input id={fieldConfig.key} {...rhfField} />
      )}
    />
  ),

  select: ({ field, control }) => (
    <Controller
      name={field.key}
      control={control}
      render={({ field: rhfField }) => (
        <Select onValueChange={rhfField.onChange} value={rhfField.value}>
          <SelectTrigger>
            <SelectValue placeholder={`Select ${field.label}`} />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  ),

  date: ({ field, control }) => (
    <Controller
      name={field.key}
      control={control}
      render={({ field: rhfField }) => (
        <Calendar selected={rhfField.value} onSelect={rhfField.onChange} />
      )}
    />
  ),
};
