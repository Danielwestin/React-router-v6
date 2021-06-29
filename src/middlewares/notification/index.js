import { useEffect, useState } from "react";
import NotificationContext from "../../contexts/notification";
import styles from "./Notification.module.css";

export default function NotificationMiddleware({ children }) {
  const [notification, setNotification] = useState();
  useEffect(() => {
    if (notification) {
      setTimeout(() => setNotification(), 2000);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider value={setNotification}>
      {children}
      {notification && (
        <p className={styles[notification.type] + " " + styles.default}>
          {notification.content}
        </p>
      )}
    </NotificationContext.Provider>
  );
}
