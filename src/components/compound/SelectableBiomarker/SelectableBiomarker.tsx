import { Button } from "../../base/Button/Button";

type Props = {
  name: string;
  description: string;
  selected: boolean;
  onToggle: () => void;
};

export const SelectableBiomarker = ({
  name,
  description,
  selected,
  onToggle,
}: Props) => {
  return (
    <div className="flex justify-between gap-4 rounded p-2 border border-gray-50">
      <div className="flex flex-col gap-1 overflow-hidden">
        <span
          className="font-sans text-sm text-gray-600 line-clamp-1"
          title={name}
        >
          {name}
        </span>
        <span
          className="font-sans text-sm text-gray-400 line-clamp-1"
          title={description}
        >
          {description}
        </span>
      </div>

      <Button
        tooltip={selected ? "Remove" : "Add to panel"}
        variant={selected ? "primary" : "secondary"}
        onClick={onToggle}
      >
        {selected ? <i className="fa-solid fa-check"></i> : "Add"}
      </Button>
    </div>
  );
};
