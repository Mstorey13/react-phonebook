import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true,
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    }
];

export default routes