import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import RestaurantList from '../views/pages/restaurant-list';

const routes = {
  '/': RestaurantList,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
