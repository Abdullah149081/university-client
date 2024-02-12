// import { NavLink } from 'react-router-dom';

// const adminPaths2 = [
//   {
//     name: 'Dashboard',
//     path: 'dashboard',
//     element: 'ADMIN_DASHBOARD',
//   },
//   {
//     name: 'User Management',
//     children: [
//       {
//         name: 'Create Admin',
//         path: 'create-admin',
//         element: 'CREATE_ADMIN',
//       },
//       {
//         name: 'Create Faculty',
//         path: 'create-faculty',
//         element: 'CREATE_FACULTY',
//       },
//       {
//         name: 'Create Student',
//         path: 'create-student',
//         element: 'CREATE_STUDENT',
//       },
//     ],
//   },
// ];

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: 'NAVLINK',
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: 'NAVLINK',
//       })),
//     });
//   }

//   return acc;
// }, []);

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);
// console.log(JSON.stringify(newArray));

// const a = [10, 11, 40];
// const b = a.reduce((acc, item) => {
//   console.log('acc', acc);
//   console.log('item', item);

//   return acc + item;
// }, 0);

// console.log(b);

// const obj = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   getGreetings(name) {
//     console.log(`Hello ${name}`);
//   },
// };

// const jsonString = JSON.stringify(obj);
// console.log('JSON representation:', jsonString);
// obj.getGreetings('Alice');
