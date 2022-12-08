import { Routes } from './interfaces';

import configs from '~/configs';
import Author from '../pages/Author';
import Blog from '../pages/Blog';
import Home from '../pages/Home';

const publicRoutes: Routes[] = [
  {
    path: configs.routes.home,
    component: Home,
  },
  {
    path: configs.routes.blog,
    component: Blog,
  },

  {
    path: configs.routes.author,
    component: Author,
  },
];

export { publicRoutes };
