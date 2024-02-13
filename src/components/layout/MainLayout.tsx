import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { logOut } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import Sidebar from '../ui/Sidebar';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handlerLogout = () => {
  dispatch(logOut());
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handlerLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
