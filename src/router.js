import {useRoutes} from "react-router-dom";
import Main from "./pages/Main/Main";
import LoginPage from "./pages/Login/LoginPage";
import MasterClasses from "./pages/MasterClasses/MasterClassesPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/masterclasses",
      element: <MasterClasses/>,
    },
  ])
}