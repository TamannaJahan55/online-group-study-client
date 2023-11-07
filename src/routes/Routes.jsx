import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Assignments from "../pages/Home/Assignments/Assignments";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import UpdateAssignments from "../pages/UpdateAssignments/UpdateAssignments";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/assignments',
          element: <Assignments></Assignments>
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
          element: <CreateAssignments></CreateAssignments>
        },
        {
          path: '/assignmentDetails/:id',
          element: <AssignmentDetails></AssignmentDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        {
          path: '/updateAssignment/:id',
          element: <UpdateAssignments></UpdateAssignments>,
          loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
        }
      ]
    },
  ]);

  export default router;