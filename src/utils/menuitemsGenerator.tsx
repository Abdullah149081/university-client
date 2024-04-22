// import { NavLink } from 'react-router-dom';
// import { TCustomMenuItem, TMenuItem } from '../types';

// const generateMenuItems = (
//   items: TMenuItem[],
//   parentRole: string,
//   parentPath: string = ''
// ): TCustomMenuItem[] => {
//   return items.map((item, idx) => {
//     const fullPath = `${parentPath}/${item?.path}`.replace(/\/+/g, '/');
//     const rolePath = parentRole ? `/${parentRole}${fullPath}` : fullPath;

//     return {
//       key: `${item?.name}${idx}`,
//       label: <NavLink to={rolePath}>{item?.name}</NavLink>,
//       children:
//         item?.children && item?.children.length > 0
//           ? generateMenuItems(item?.children, parentRole, fullPath)
//           : undefined,
//     };
//   });
// };

// export default generateMenuItems;

// import { NavLink } from 'react-router-dom';
// import { TSidebarItem, TUserPath } from '../types';

// const generateMenuItems = (items: TUserPath[], role: string) => {
//   const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children
//           .filter((child) => child.name) // Filter out falsy values
//           .map((child) => ({
//             key: child.name,
//             label: (
//               <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
//             ),
//           })),
//       });

//     }

//     return acc;
//   }, []);

//   return sidebarItems;
// };

// export default generateMenuItems;

import { NavLink } from 'react-router-dom';
import { TSidebarItem, TUserPath } from '../types';

const generateMenuItems = (items: TUserPath[], role: string, basePath = '') => {
  return items.reduce((acc: TSidebarItem[], item) => {
    // Calculate the full path for the current item
    const currentPath = `${basePath}/${item.path}`.replace(/\/+/g, '/');

    // Generate a menu item for the current path
    if (item.name) {
      const newItem: TSidebarItem = {
        key: item.name + currentPath, // Unique key using name and path
        label: <NavLink to={`/${role}${currentPath}`}>{item.name}</NavLink>,
        children: undefined, // Initialize children property
      };

      // If the item has children, recursively generate the children menu items
      if (item.children && item.children.length > 0) {
        newItem.children = generateMenuItems(item.children, role, currentPath);
      }

      acc.push(newItem);
    }

    return acc;
  }, []);
};

export default generateMenuItems;
