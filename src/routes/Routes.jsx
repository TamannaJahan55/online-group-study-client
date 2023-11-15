import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Assignments from "../pages/Home/Assignments/Assignments";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import UpdateAssignments from "../pages/UpdateAssignments/UpdateAssignments";
import SubmittedAssignments from "../pages/SubmittedAssignments/SubmittedAssignments";
import PrivateRoute from "./PrivateRoute";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import UpdateSubmit from "../pages/SubmittedAssignments/UpdateSubmit";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/features.json')
        },
        {
          path: '/assignments',
          element: <Assignments></Assignments>,
          loader: () => fetch('https://online-group-study-server-swart.vercel.app/assignmentsCount')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/createAssignment',
          element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
        },
        {
          path: '/assignmentDetails/:id',
          element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://online-group-study-server-swart.vercel.app/assignments/${params?.id}`)
        },
        {
          path: '/updateAssignment/:id',
          element: <PrivateRoute><UpdateAssignments></UpdateAssignments></PrivateRoute>,
          loader: ({params}) => fetch(`https://online-group-study-server-swart.vercel.app/assignments/${params.id}`)
        },
        {
          path: '/submittedAssignments',
          element:<PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>
        },
        {
          path: '/myAssignments',
          element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
        },
        {
          path: '/updateSubmit/:id',
          element: <UpdateSubmit></UpdateSubmit>,
          loader: ({params}) => fetch(`https://online-group-study-server-swart.vercel.app/submittedAssignments/${params.id}`)
        }
      ]
    },
  ]);

  export default router;