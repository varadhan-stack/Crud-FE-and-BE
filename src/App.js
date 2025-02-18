import Register from './registerForm';
import { Routes,Route  } from "react-router-dom";
import Login from './loginForm';
import Home from './home';
import Landing from './modules/landing';
import ToastTests from './toastTest'
import { NotificationProvider } from './NotificationContext';
import ToastNotification from './ToastNotification';




function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/toastTest" element={<ToastTests />} />
    </Routes>
  );
}
const AppWrapper = () => (
  <NotificationProvider>
    <App />
    <ToastNotification />
  </NotificationProvider>
);

export default AppWrapper;