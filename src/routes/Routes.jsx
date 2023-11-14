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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/features.json')
        },
        {
          path: '/assignments',
          element: <Assignments></Assignments>,
          loader: () => fetch('http://localhost:5000/assignmentsCount')
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
          element: <AssignmentDetails></AssignmentDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/assignments/${params?.id}`)
        },
        {
          path: '/updateAssignment/:id',
          element: <PrivateRoute><UpdateAssignments></UpdateAssignments></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
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
          loader: ({params}) => fetch(`http://localhost:5000/submittedAssignments/${params.id}`)
        }
      ]
    },
  ]);

  export default router;