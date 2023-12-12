import classes from "./style.module.scss";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactElement,
} from "react";

type Props = {
  btnStyle: "onWhite" | "onBlack" | "primary";
  btnType: "round" | "rectangle";
  children: React.ReactNode;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({
  btnType,
  btnStyle,
  children,
  className,
  ...props
}): ReactElement => {
  const finalClassName = className
    ? `${classes.button} ${classes[btnType]} ${classes[btnStyle]} ${className}`
    : `${classes.button} ${classes[btnType]} ${classes[btnStyle]}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
