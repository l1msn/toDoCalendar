import React from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import RouteNames from '../consts/RouteNames';

const Navbar: React.FC = (): JSX.Element => {
  const router = useNavigate();
  const auth: boolean = false;
  return (
    <Layout.Header>
      <Row justify="end">
        {auth ? (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item disabled>User</Menu.Item>
            <Menu.Item
              onClick={(): void => {
                alert('logout');
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
