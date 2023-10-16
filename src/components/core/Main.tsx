import { Sidenav } from './Sidenav';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <div className="main" style={{ display: 'flex' }}>
      <div className="sidenav">
        <Sidenav />
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};
