import { Layout, Menu } from 'antd';
import adminPaths from '../../routes/admin.routes';
import facultyPaths from '../../routes/faculty.routes';
import studentPaths from '../../routes/student.routes';
import generateMenuItems from '../../utils/menuItemsGenerator';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

const Sidebar = () => {
  const role = 'student';
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = generateMenuItems(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = generateMenuItems(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = generateMenuItems(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: 'white',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
