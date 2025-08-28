import { twMerge } from "tailwind-merge";

export type ActionIconProps = React.InputHTMLAttributes<HTMLButtonElement>;

export function ActionIcon({ className, type, ...rest }: ActionIconProps) {
  return (
    <button
      {...rest}
      className={twMerge("bg-gray-200 p-2 text-gray-500 focus:outline outline-blue-400 hover:cursor-pointer", className)}
      //@ts-ignore
      type={type || "button"}
    />
  );
}
