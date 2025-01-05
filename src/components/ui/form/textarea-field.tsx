import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes } from "react";

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  isError?: boolean;
}

const Textarea = ({ placeholder, isError, ...props }: TextareaFieldProps) => {
  return (
    <>
      <textarea
        {...props}
        placeholder={placeholder}
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

export default Textarea;
