import { useFormContext } from "react-hook-form";
import { InputField } from "../types";

export const TextField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" {...register(name)} />
    </div>
  );
};

export const EmailField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="email" {...register(name)} />
    </div>
  );
};

export const CheckboxField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="checkbox" {...register(name)} />
    </div>
  );
};

export const ButtonField: React.FC<InputField> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <button id={name} type="button" {...register(name)} />
    </div>
  );
};
export const SwitchField: React.FC<InputField> = ({ name, label }) => {
  // const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>To Be Implemented</div>
    </div>
  );
};
