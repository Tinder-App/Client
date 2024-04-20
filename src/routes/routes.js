import config from "../config";

import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import DefaultLayout from "../layouts/DefaultLayout";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },

  {
    path: config.routes.login,
    component: Login,
  },

  {
    path: config.routes.register,
    component: Register,
  },
];

export { publicRoutes };
