import React from "react";
import { CiGrid41 } from "react-icons/ci";

type Props = {
  Label?: string;
  Icon?: React.ReactNode;
  InputType?: string;
  Placeholder?: string;
  Value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
  name?: string;
  iconStyle?: string;
  labelStye?: string;
};

const IconInput = ({
  Label,
  Icon = <CiGrid41 />,
  InputType = "text",
  Placeholder = "",
  Value,
  required = false,
  onChange,
  className = "",
  name,
  iconStyle,
  labelStye,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {Label && (
        <label
          className={`text-lg
          text-primary-text
          font-bold ${labelStye || ""}`}
          htmlFor={name || Label}
        >
          {Label}
        </label>
      )}

      <div className="relative group">
        {/* Icon */}
        <span
          className={`
            absolute left-3 top-1/2 -translate-y-1/2
            text-primary-text transition-transform duration-200
            text-xl group-focus-within:text-primary
            ${iconStyle || ""}
          `}
        >
          {Icon}
        </span>

        {/* Input */}
        <input
          id={name || Label}
          name={name}
          type={InputType}
          placeholder={Placeholder}
          value={Value}
          required={required}
          onChange={onChange}
          className={`pl-10 pr-3 py-2 w-full rounded border border-border outline-3 outline-offset-0 outline-transparent focus:outline-primary focus:ring-1 focus:ring-primary transition font-bold ${className}`}
        />
      </div>
    </div>
  );
};

export default IconInput;
