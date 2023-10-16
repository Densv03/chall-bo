import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/Auth/auth.service';

export const UserList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>User List</h1>
      <button
        onClick={() => {
          AuthService.logout();
          navigate('/login');
        }}>
        logout
      </button>
    </div>
  );
};
