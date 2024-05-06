import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BotList } from "./bots";

const router = createBrowserRouter([
  {
    path: "/bots",
    element: <BotList />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
