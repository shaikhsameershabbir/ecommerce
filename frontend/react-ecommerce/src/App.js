import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: (
      <div>
        <LoginPage />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <SignupPage />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Home /> */}
    </div>
  );
}

export default App;
