import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={clsx(
        "w-full border-b border-gray-300 px-0 focus:border-black outline-none",
        className
      )}
    />
  );
};

export default Input
