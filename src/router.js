import {useRoutes} from "react-router-dom";
import Main from "./pages/Main/Main";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    // { path: "*", element: <Page404 /> },
  ])
}