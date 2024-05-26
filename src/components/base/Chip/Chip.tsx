import classNames from "classnames";

type Props = {
  label: string;
  onDismiss?: () => void;
  disabled?: boolean;
};

export const Chip = ({ label, onDismiss, disabled }: Props) => {
  return (
    <div
      className={classNames(
        "flex px-2 py-1 rounded bg-gray-200 text-gray-700 text-xs items-center gap-2",
        {
          "justify-between": onDismiss,
          "cursor-pointer": onDismiss && !disabled,
          "justify-center": !onDismiss,
        }
      )}
      onClick={!disabled ? onDismiss : undefined}
    >
      <span title={label} className="max-w-24 line-clamp-1">
        {label}
      </span>
      {onDismiss && <i className="fa-solid fa-xmark"></i>}
    </div>
  );
};
