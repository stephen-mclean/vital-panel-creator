import classNames from "classnames";

type InfoMessageTypes = "info" | "error" | "loading";

type Props = {
  message: string;
  type: InfoMessageTypes;
};

type IconMap = {
  [key in InfoMessageTypes]: string;
};

const iconMap: IconMap = {
  info: "fa-solid fa-circle-info",
  error: "fa-solid fa-circle-exclamation",
  loading: "fa-solid fa-circle-notch",
};

export const InfoMessage = ({ message, type }: Props) => {
  return (
    <div className="flex flex-col gap-1 items-center text-sm text-gray-600">
      <i
        className={classNames(iconMap[type], {
          "text-error-500": type === "error",
          "animate-spin": type === "loading",
        })}
      ></i>
      <span className="font-sans">{message}</span>
    </div>
  );
};
