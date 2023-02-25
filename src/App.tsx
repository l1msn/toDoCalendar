import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import useActions from './hooks/useActions';
import IUser from './interfaces/models/IUser';

function App(): JSX.Element {
  const { setUser, setAuth } = useActions();

  useEffect((): void => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username') } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <Layout className="App">
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
