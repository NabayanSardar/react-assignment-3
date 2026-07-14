import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import LargeFormOptimizer from "../pages/LargeFormOptimizer";
import Stopwatch from "../pages/Stopwatch";

import StudentList from "../pages/studentsmanagement/StudentList";
import AddStudent from "../pages/studentsmanagement/AddStudent";
import EditStudent from "../pages/studentsmanagement/EditStudent";
import StudentDetails from "../pages/studentsmanagement/StudentDetails";

import StudentLayout from "../components/StudentLayout";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <LargeFormOptimizer />,
      },

      {
        path: "stopwatch",
        element: <Stopwatch />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <Signup />,
      },

      {
        path: "students",

        element: (
          <ProtectedRoute>
            <StudentLayout />
          </ProtectedRoute>
        ),

        children: [
          {
            index: true,
            element: <StudentList />,
          },

          {
            path: "add",
            element: <AddStudent />,
          },

          {
            path: "edit/:id",
            element: <EditStudent />,
          },

          {
            path: ":id",
            element: <StudentDetails />,
          },
        ],
      },
    ],
  },
]);