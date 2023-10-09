import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login/Login';
import { RouteModel } from '../models/route.model';
import { Registration } from '../components/Registration';
import { AuthService } from '../services/Auth/auth.service';
import { NotFound } from '../components/NotFound';
import React from 'react';
import { Dashboard } from '../components/Dashboard';
import { RedirectModel } from '../models/redirect.model';

export const AppRouter = () => {
  const AUTHED_USER_ROUTES: RouteModel[] = [
    {
      path: '/dashboard',
      element: <Dashboard />,
      exact: true,
    },
  ];
  const AUTHED_USER_REDIRECTS: RedirectModel[] = [
    {
      path: '/',
      redirectTo: '/dashboard',
    },
  ];

  const NOT_AUTHED_USER_ROUTES: RouteModel[] = [
    {
      path: '/login',
      exact: true,
      element: <Login />,
    },
    {
      path: '/register',
      exact: true,
      element: <Registration />,
    },
    {
      path: '/not-found',
      exact: true,
      element: <NotFound />,
    },
  ];
  const NOT_AUTHED_USER_REDIRECTS: RedirectModel[] = [
    {
      path: '/',
      redirectTo: '/login',
    },
    {
      path: '*',
      redirectTo: '/not-found',
    },
  ];

  function renderAuthedUserRoutes(): React.ReactElement {
    return (
      <Routes>
        {[...AUTHED_USER_ROUTES, ...NOT_AUTHED_USER_ROUTES].map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}></Route>
        ))}
        {AUTHED_USER_REDIRECTS.map((redirect) => (
          <Route
            path={redirect.path}
            element={<Navigate to={redirect.redirectTo} />}
            key={redirect.path}></Route>
        ))}
      </Routes>
    );
  }

  function renderNotAuthedUserRoutes(): React.ReactElement {
    return (
      <Routes>
        {NOT_AUTHED_USER_REDIRECTS.map((redirect) => (
          <Route
            path={redirect.path}
            element={<Navigate to={redirect.redirectTo} />}
            key={redirect.path}></Route>
        ))}
        {NOT_AUTHED_USER_ROUTES.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.path}></Route>
        ))}
      </Routes>
    );
  }

  return (
    <div id="router-wrapper">
      {AuthService.isAuth()
        ? renderAuthedUserRoutes()
        : renderNotAuthedUserRoutes()}
    </div>
  );
};
