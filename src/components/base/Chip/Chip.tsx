import classNames from "classnames";

type Props = {
  label: string;
  onDismiss?: () => void;
};

export const Chip = ({ label, onDismiss }: Props) => {
  return (
    <div
      className={classNames(
        "flex px-2 py-1 rounded bg-gray-200 text-gray-700 text-xs items-center gap-2",
        {
          "justify-between cursor-pointer": onDismiss,
          "justify-center": !onDismiss,
        }
      )}
      onClick={onDismiss}
    >
      <span title={label} className="max-w-24 line-clamp-1">
        {label}
      </span>
      {onDismiss && <i className="fa-solid fa-xmark"></i>}
    </div>
  );
};
