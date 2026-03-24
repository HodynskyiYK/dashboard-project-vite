import type { IUsersList } from './types';

export function UsersList({ users }: IUsersList) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
