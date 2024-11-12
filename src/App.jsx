import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import { RegisterEmailVerify } from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import { RegisterSuccess } from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import { ForgotPassword } from "./pages/Auth/ForgotPassword/ForgotPassword";
import { ForgotPasswordSent } from "./pages/Auth/ForgotPasswordSent/Forgot.passwordSent";
import { ResetPassword } from "./pages/Auth/Reset Password/ResetPassword";
import { ResetPasswordSuccess } from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/register-email-verify/:email",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/email-verify/:token",
    element: <RegisterSuccess />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/forgot-password-sent",
    element: <ForgotPasswordSent />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/reset-password-success",
    element: <ResetPasswordSuccess />,
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
