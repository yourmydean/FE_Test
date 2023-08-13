import Dashboard from "../page/dashboard/dashboard";
import MasterData from "../page/master-data/masterdata";

export const ListRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/master-data",
    element: <MasterData />,
  },
];
