import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../HomePage/HomeContainer/Home";
import Colleges from "../Pages/CollegePage/Colleges";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdmissionForm from "../Pages/AdmissionPages/AdmissionForm";
import CollegesList from "../Pages/AdmissionPages/CollegesList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyColleges from "../Pages/MyColleges/MyColleges";
import MyProfile from "../Pages/MyProfile/MyProfile";
import CollegeDetails from "../Pages/CollegeDetals/CollegeDetails";
import PrivateRoute from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "colleges",
        element: <Colleges />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "collegeslist",
        element: <CollegesList />,
      },
      {
        path: "admission/:id",
        element: (
          <PrivateRoute>
            <AdmissionForm />,
          </PrivateRoute>
        ),
      },
      {
        path: "collegedetails/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "mycolleges",
        element: (
          <PrivateRoute>
            <MyColleges />,
          </PrivateRoute>
        ),
      },
      {
        path: "myprofile",
        element: <MyProfile />,
      },
    ],
  },
]);
export default router;
