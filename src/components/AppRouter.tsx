import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter: React.FC = (): JSX.Element => {
  const auth: boolean = true;

  return (
    <div>
      <Routes>
        {auth
          ? privateRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  element={<route.component />}
                  path={route.path}
                />
              );
            })
          : publicRoutes.map((route) => {
              {
                return (
                  <Route
                    key={route.path}
                    element={<route.component />}
                    path={route.path}
                  />
                );
              }
            })}
      </Routes>
    </div>
  );
};

export default AppRouter;
