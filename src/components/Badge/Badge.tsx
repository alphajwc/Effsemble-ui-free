export type color =
  | "gray"
  | "yellow"
  | "red"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "orange"
  | "white"
  | "black"
  | "transparent";

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  color: color;
}

const Alert: React.FC<AlertProps> = ({
  children,
  className = "",
  color = "blue",
}) => {
  const colorStyles = {
    gray: {
      bg: "bg-gray-50 dark:bg-gray-900/20 text-gray-900 dark:text-gray-400",
    },
    yellow: {
      bg: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-400",
    },
    red: {
      bg: "bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-400",
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-400",
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-400",
    },
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-400",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-purple-400",
    },
    pink: {
      bg: "bg-pink-50 dark:bg-pink-900/20 text-pink-900 dark:text-pink-400",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/20 text-orange-900 dark:text-orange-400",
    },
    white: {
      bg: "bg-white dark:bg-gray-900/20 text-gray-900 dark:text-gray-400",
    },
    black: {
      bg: "bg-black dark:bg-gray-900/20 text-gray-200 dark:text-gray-400",
    },
    transparent: {
      bg: "bg-transparent",
    },
  };

  return (
    <div
      className={`inline-flex w-fit items-center p-2
      ${colorStyles[color].bg} ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Alert;
