import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  trailingIcon?: ReactNode;
  size?: "sm" | "md";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const baseClass =
  "bg-primary inline-flex items-center justify-center rounded-[100px] transition-transform hover:scale-105 no-underline border-0 cursor-pointer";

const sizeClassMap = {
  sm: "h-12 sm:h-[54px] px-6 sm:px-8 md:px-[40px] py-4 sm:py-5",
  md: "h-10 sm:h-12 md:h-[54px] pl-4 sm:pl-6 md:pl-[24px] pr-2 sm:pr-[6px] py-3 sm:py-5 gap-2 sm:gap-[12px]",
};

const labelClass = "m-0 whitespace-nowrap font-manrope font-bold leading-none text-neutral-black text-sm sm:text-[16px] uppercase";

const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  fullWidth = false,
  trailingIcon,
  size = "sm",
  type = "button",
  ...props
}) => {
  const classes = `${baseClass} ${sizeClassMap[size]} ${fullWidth ? "w-full sm:w-auto" : ""} ${className ?? ""}`.trim();

  const content = (
    <>
      <p className={labelClass}>{children}</p>
      {trailingIcon}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as Record<string, unknown>)}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
