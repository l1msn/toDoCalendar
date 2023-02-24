import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Layout } from 'antd';

function App(): JSX.Element {
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
