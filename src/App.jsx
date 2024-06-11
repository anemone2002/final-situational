import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage'
import UserLoginpage from './pages/UserLoginpage';

const router = createBrowserRouter([
  {path: "/",
  element: <HomePage />,},
  {path: "/registration-form",
  element: <RegistrationPage />,},
  {path: "/login-form",
  element: <UserLoginpage />,},

  {path: "/user-profile-form",
  element: <ProfilePage />,}
])

function App() {
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;