import { signOut } from 'next-auth/react';
import EmptyState from '../components/EmptyState';

type UsersProps = {};

const Users: React.FC<UsersProps> = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};
export default Users;
