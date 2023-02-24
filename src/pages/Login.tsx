import React from 'react';
import { Card, Layout, Row } from 'antd';
import LoginForm from '../components/login/LoginForm';

const Login: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
