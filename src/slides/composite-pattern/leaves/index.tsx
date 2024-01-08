import { Controller, useFormContext } from "react-hook-form";
import { InputField, MultiSelectField as MultiSelectFieldProps  } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@radix-ui/react-switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TextField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} type="text" {...register(name)} />
    </div>
  );
};

export const EmailField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} type="email" {...register(name)} />
    </div>
  );
};

export const CheckboxField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} type="checkbox" {...register(name)} />
    </div>
  );
};

export const ButtonField: React.FC<InputField> = ({ name }) => {
  const { register } = useFormContext();

  return (
    <Button type="submit" id={name} {...register(name)}>
      Submit
    </Button>
  );
};
export const SwitchField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Switch {...register(name)}>To Be Implemented</Switch>
    </div>
  );
};

export const SelectField: React.FC<InputField> = ({ name, label, options }) => {
  const { control } = useFormContext();
  const { watch } = useFormContext();
  const formData = watch();

  const resolvedOptions = typeof options === "function" ? options(formData) : options;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (onChange: (...event: any[]) => void) => (value: any) => {
    onChange(value);
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select onValueChange={handleSelectChange(onChange)} value={value}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {resolvedOptions?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export const MultiSelectField: React.FC<MultiSelectFieldProps> = ({ name, label, options }) => {
  const { register } = useFormContext();
  const { watch } = useFormContext();
  const formData = watch();

  const resolvedOptions = typeof options === "function" ? options(formData) : options;

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      {resolvedOptions?.map((opt) => (
        <div key={opt.value}>
          <input type="checkbox" {...register(name)} value={opt.value} id={opt.value} />
          <Label htmlFor={opt.value}>{opt.label}</Label>
        </div>
      ))}
    </div>
  );
};

// DetailedText Component
export const DetailedTextField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <textarea id={name} {...register(name)} />
    </div>
  );
};

// UploadField Component
export const UploadField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input id={name} type="file" {...register(name)} />
    </div>
  );
};
