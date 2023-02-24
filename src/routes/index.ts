import Login from '../pages/Login';
import IRoute from '../interfaces/routes/IRoute';
import Event from '../pages/Event';
import RouteNames from '../consts/RouteNames';

const publicRoutes: IRoute[] = [
  { path: RouteNames.ANY, component: Login },
  { path: RouteNames.LOGIN, component: Login },
];

const privateRoutes: IRoute[] = [
  { path: RouteNames.ANY, component: Event },
  { path: RouteNames.EVENT, component: Event },
];

export { publicRoutes, privateRoutes };
