import routes from '../configs/routes';
import Author from '../pages/Author';
import ClassicPost from '../pages/ClassicPost';
import Home from '../pages/Home';
import { Routes } from './interfaces';

const publicRoutes: Routes[] = [
  {
    path: routes.homePage,
    component: Home,
  },
  {
    path: routes.classicPostPage,
    component: ClassicPost,
  },
  {
    path: routes.author,
    component: Author,
  },
];

export { publicRoutes };
