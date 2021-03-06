import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Admin, { CreateUser, DeleteUser, EditUser } from 'app/views/Admin';

const AdminRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/user/create`} exact>
        <CreateUser />
      </Route>
      <Route path={`${path}/user/:userId`} exact>
        <EditUser />
      </Route>
      <Route path={`${path}/user/delete/:userId`} exact>
        <DeleteUser />
      </Route>
      <Route path={path}>
        <Admin />
      </Route>
    </Switch>
  );
};

export default AdminRoutes;
