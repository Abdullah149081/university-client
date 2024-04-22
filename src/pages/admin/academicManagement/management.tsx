import { Outlet, useLocation } from 'react-router-dom';

const Management = () => {
  const location = useLocation();

  const noShow = location.pathname === '/admin/management';

  return (
    <div>
      {noShow && (
        <div>
          <h1>Academic Management</h1>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Management;
