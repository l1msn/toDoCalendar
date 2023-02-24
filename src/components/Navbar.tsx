import React from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import RouteNames from '../consts/RouteNames';
import useTypeSelector from '../hooks/useTypeSelector';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import AuthActionsCreators from '../store/actions-creators/auth';

const Navbar: React.FC = (): JSX.Element => {
  const router = useNavigate();

  const dispatch = useDispatch();

  const { isAuth, user } = useTypeSelector((state: RootState) => {
    return state.authReducer;
  });
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item disabled key={0}>
              {user.username}
            </Menu.Item>
            <Menu.Item
              onClick={(): void => {
                dispatch<any>(AuthActionsCreators.logout());
              }}
              key={1}
            >
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item
              onClick={(): void => {
                router(RouteNames.LOGIN);
              }}
              key={1}
            >
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
