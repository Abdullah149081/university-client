import { TRoute } from '../types';

const routesGenerator = (items: TRoute[]): TRoute[] => {
  const routes = items?.map((item: TRoute) => {
    const routeItem: TRoute = {
      path: item?.path,
      element: item?.element,
      children:
        item?.children && item?.children?.length > 0
          ? routesGenerator(item?.children)
          : undefined,
    };

    return routeItem;
  });

  return routes;
};

export default routesGenerator;
