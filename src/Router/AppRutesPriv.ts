import { Home } from '../Module/Home/view/Home';
import { Login } from '../Module/Login/view/Login';

export const routes = [
  {
    path: '/',
    component: Home,
    auth: 'user',

  },
  {
    path: '/login',
    component: Login,
    auth: 'guest',
  },

];
