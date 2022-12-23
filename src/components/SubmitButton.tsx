import { FormEvent } from "react";

type SubmitButtonProps = {
  disabled: boolean;
  handleSubmit: (e: FormEvent) => void;
};

export default function SubmitButton({
  handleSubmit,
  disabled,
}: SubmitButtonProps) {
  return (
    <button
      className="bg-orange-300 my-1 mr-1 rounded-tr rounded-br p-1 text-slate-900"
      id="Submit"
      disabled={disabled}
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
}
