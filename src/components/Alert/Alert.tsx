export type AlertType = "info" | "success" | "warning" | "error";

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  type: AlertType;
  icon?: React.ReactNode;
  bgColor?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  className = "",
  type = "info",
  icon = "",
  bgColor = "",
}) => {
  const alertStyles = {
    info: {
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      icon: "fill-blue-600 dark:fill-blue-700",
      path: (
        <path d="M453 776h60V536h-60v240Zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z" />
      ),
    },
    success: {
      bgColor: "bg-green-50 dark:bg-green-900/20",
      icon: "fill-green-600 dark:fill-green-700",
      path: (
        <path d="m421 758 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
      ),
    },
    warning: {
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      icon: "fill-yellow-600 dark:fill-yellow-700",
      path: (
        <path d="m40 936 440-760 440 760H40Zm444.175-117q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454 708h60V484h-60v224Z" />
      ),
    },
    error: {
      bgColor: "bg-red-50 dark:bg-red-900/20",
      icon: "fill-red-600 dark:fill-red-700",
      path: (
        <path d="M479.982 776q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453 623h60V370h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z" />
      ),
    },
  };

  if (!icon) {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="35"
        viewBox="0 96 960 960"
        width="35"
        className={`flex-none ${alertStyles[type].icon}`}
      >
        {alertStyles[type].path}
      </svg>
    );
  }
  if (!bgColor) {
    bgColor = alertStyles[type].bgColor;
  }
  if (!className) {
    className = "inline-flex items-center gap-5 p-5";
  }
  return (
    <div className={`${className} ${bgColor}`}>
      {icon}
      {children}
    </div>
  );
};

export default Alert;
