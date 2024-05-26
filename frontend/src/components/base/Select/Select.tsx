import classNames from "classnames";

type Option = {
  label: string;
  value: string;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  options: Option[];
}

export const Select = ({
  label,
  error,
  fullWidth,
  id,
  options,
  placeholder,
  ...selectProps
}: SelectProps) => {
  return (
    <div
      className={classNames("flex flex-col gap-1 font-sans", {
        "w-full": fullWidth,
      })}
    >
      {label && (
        <label htmlFor={id} className="text-gray-600 font-medium text-sm">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={classNames(
          "bg-gray-50 text-gray-500 focus:outline-none  rounded px-2 py-1 transition-colors placeholder:text-gray-300",
          {
            "border border-gray-100 focus:border-gray-300 hover:border-gray-300":
              !error,
            "border border-error-500": error,
            "w-full": fullWidth,
          }
        )}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
