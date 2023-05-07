import React, { useState, useEffect } from "react";

interface NotificationProps {
  children: string | React.ReactNode;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose?: () => void;
  className?: string;
}

const Notification: React.FC<NotificationProps> = ({
  children,
  type,
  duration = 3000,
  onClose,
  className = "bottom-4 right-4 rounded p-4 text-white shadow-md",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (!visible && onClose) {
      onClose();
    }
  }, [visible, onClose]);

  const bgColor =
    type &&
    {
      success: "bg-green-500",
      error: "bg-red-500",
      warning: "bg-yellow-500",
      info: "bg-blue-500",
    }[type];

  if (!visible) return null;

  return <div className={`fixed ${className} ${bgColor}`}>{children}</div>;
};

export default Notification;
