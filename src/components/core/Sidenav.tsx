import { Link } from 'react-router-dom';

export const Sidenav = () => {
  return (
    <ul
      className="sidenav"
      style={{ display: 'flex', flexDirection: 'column' }}>
      <li>
        <Link to="/users/list">Users</Link>
      </li>
      <li>
        <Link to="/organizations/create">Organizations</Link>
        <ul>
          <li>
            <Link to="/organizations/create">Create</Link>
          </li>
          <li>
            <Link to="/organizations/delete">Delete</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/reports">Reports</Link>
      </li>
    </ul>
  );
};
