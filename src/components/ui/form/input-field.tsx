import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: "text" | "email";
  isError?: boolean;
}

const InputField = ({
  placeholder,
  type,
  isError,
  ...props
}: InputFieldProps) => {
  return (
    <>
      <input
        {...props}
        placeholder={placeholder}
        type={type}
        className={cn(
          "border-b-2 border-white bg-transparent px-3 py-5 text-white outline-none focus:border-secondary-green-400",
          {
            "border-primary-coral placeholder:text-primary-coral placeholder:opacity-75 focus:border-primary-coral":
              isError,
          },
        )}
      />
      {isError && (
        <p className="mt-[6px] text-primary-coral">Something bad happen</p>
      )}
    </>
  );
};

export default InputField;
