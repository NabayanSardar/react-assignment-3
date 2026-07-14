import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = React.memo(
  ({ label, name, value, onChange }) => {
    console.log(`Rendering: ${name}`);

    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">{label}</label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="border p-2 rounded-md"
        />
      </div>
    );
  }
);

export default InputField;