import React, { ChangeEvent, useState } from 'react';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import rules from '../../utils/rules';
import useTypeSelector from '../../hooks/useTypeSelector';
import { RootState } from '../../store';
import useActions from '../../hooks/useActions';

const LoginForm: React.FC = (): JSX.Element => {
  const { login } = useActions();

  const { error, isLoading } = useTypeSelector((state: RootState) => {
    return state.authReducer;
  });

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function submit() {
    login(username, password);
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={submit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setUsername(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setPassword(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
      {error && <Alert message={error} type="error" />}
    </Form>
  );
};

export default LoginForm;
