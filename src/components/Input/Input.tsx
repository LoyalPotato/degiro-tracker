import { createSignal } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import "./Input.less";

interface InputProps
  extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "onInput"> {
  onInput?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const [, setInput] = createSignal<string>();

  return (
    <input
      {...props}
      class="dt-input"
      onInput={(e) => {
        setInput(e.target.value);
        if (props.onInput) {
          props.onInput(e.target.value);
        }
      }}
    />
  );
};

interface LabeledInputProps extends InputProps {
  label: string;
  againstLightBg?: boolean;
}

const LabeledInput = (props: LabeledInputProps) => {
  const { label, againstLightBg, ...inputProps } = props;
  return (
    <div class="dt-input-label-container">
      <label
        class={`dt-input-label ${againstLightBg ? "dt-input-label--dark" : ""}`}
      >
        {props.label}
      </label>
      <Input {...inputProps} />
    </div>
  );
};

export default LabeledInput;
