import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import useTypeSelector from '../hooks/useTypeSelector';
import { RootState } from '../store';

const AppRouter: React.FC = (): JSX.Element => {
  const { isAuth } = useTypeSelector((state: RootState) => {
    return state.authReducer;
  });

  return (
    <div>
      <Routes>
        {isAuth
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
