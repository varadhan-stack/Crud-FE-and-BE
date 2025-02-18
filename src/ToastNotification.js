import React from 'react';
import { useNotification } from './NotificationContext';

const ToastNotification = () => {
  const { notification } = useNotification();

  if (!notification) return null; // If no notification, return nothing

  return (
    <div
      className={`toast align-items-center text-bg-${notification.type} border-0 position-fixed bottom-0 end-0 m-3`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{notification.message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default ToastNotification;
