import config from "../config";

import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Post from "../pages/Post";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";

import DefaultLayout from "../layouts/DefaultLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";

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

  { path: config.routes.posts, component: Post, layout: MainLayout },
  { path: config.routes.chat, component: Chat, layout: MainLayout },
  { path: config.routes.profile, component: Profile, layout: MainLayout },
];

export { publicRoutes };
