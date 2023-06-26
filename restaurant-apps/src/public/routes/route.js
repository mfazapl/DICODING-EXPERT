import detail from '../pages/detail';
import favorite from '../pages/favorite';
import home from '../pages/home';

const routes = {
  '/': home, /* default page */
  '/home': home,
  '/detail/:id': detail,
  '/favorite': favorite,
};

export default routes;
