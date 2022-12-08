import routes from '~/configs/routes';
import { NavList } from '~/interfaces';

export const navList: NavList[] = [
  {
    id: 1,
    name: 'Home',
    link: routes.homePage,
  },
  {
    id: 2,
    name: 'FullWidth Post',
    link: '/fullWidth-post',
  },
  {
    id: 3,
    name: '#Tag',
    link: '/@:tag',
  },
  {
    id: 4,
    name: 'Author',
    link: routes.author,
  },
];
