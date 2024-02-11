import { NavLink } from 'react-router-dom';
import { TCustomMenuItem, TMenuItem } from '../types';

const generateMenuItems = (
  items: TMenuItem[],
  parentRole: string,
  parentPath: string = ''
): TCustomMenuItem[] => {
  return items.map((item, idx) => {
    const fullPath = `${parentPath}/${item?.path}`.replace(/\/+/g, '/');

    const rolePath = parentRole ? `/${parentRole}${fullPath}` : fullPath;

    return {
      key: `${item?.name}${idx}`,
      label: <NavLink to={rolePath}>{item?.name}</NavLink>,
      children:
        item?.children && item?.children?.length > 0
          ? generateMenuItems(item?.children, parentRole, fullPath)
          : undefined,
    };
  });
};

export default generateMenuItems;
