import { twMerge } from "tailwind-merge";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={twMerge(
        "bg-white placeholder:text-gray-400 py-2 px-4 focus:outline outline-blue-400",
        className,
      )}
    />
  );
}
