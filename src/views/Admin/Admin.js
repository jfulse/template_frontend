import { useCallback, useEffect, useState } from 'react';

import { useAutheticatedFetch, useEnsureAuthenticated } from 'app/hooks';

const API_URL = 'http://localhost:3003';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const authenticatedFetch = useAutheticatedFetch();

  useEnsureAuthenticated(); // TODO: Won't need this here; move to admin route?

  const fetchUsers = useCallback(async () => {
    const response = await authenticatedFetch(`${API_URL}/users/all`);
    if (response.status !== 200) return;
    setUsers(await response.json());
  }, [authenticatedFetch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>Admin</h1>
      {users.length > 0 && (
        <div>
          <h2>Users</h2>
          <ul>
            {users.map(({ id, name, email }) => (
              <li key={`user-${id}`}>
                {name} {email} ({id})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
