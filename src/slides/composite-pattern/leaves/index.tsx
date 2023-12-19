import { useFormContext } from "react-hook-form";
import { InputField } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@radix-ui/react-switch";

// render()

// export const HookFormError: React.FC = (errors: ) => {
//   return
// }

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
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
