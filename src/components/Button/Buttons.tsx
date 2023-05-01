import { Component, splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import "./Buttons.less";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: Component<ButtonProps> = (props) => {
  const [localProp, restProps] = splitProps(props, ["children"]);
  if (!localProp.children) return null;
  return <button {...restProps}>{localProp.children}</button>;
};

export const PrimaryButton: Component<ButtonProps> = (props) => {
  const [localProps, restProps] = splitProps(props, ["children", "class"]);
  return (
    <Button class={`primary-btn ${localProps.class ?? ""}`} {...restProps}>
      {localProps.children}
    </Button>
  );
};
