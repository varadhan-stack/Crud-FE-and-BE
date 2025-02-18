// App.js
import React, { useState } from 'react';
import ToastNotification from './ToastNotification';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); // 'success', 'danger', etc.

  const showNotification = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  return (
    <div className="App">
      <h1>Bootstrap Toast in React</h1>
      <button
        className="btn btn-primary"
        onClick={() => showNotification('This is a success message!', 'success')}
      >
        Show Success Notification
      </button>
      <button
        className="btn btn-danger ms-2"
        onClick={() => showNotification('This is an error message!', 'danger')}
      >
        Show Error Notification
      </button>

      <ToastNotification
        message={toastMessage}
        type={toastType}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default App;
