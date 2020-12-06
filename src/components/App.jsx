import React from 'react';
import {Router} from '@reach/router';

import Home from '../pages/Home.jsx';
import Table from '../pages/Table.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Layout from './Layout';
import Hook from '../pages/hook.jsx';
import Conver from './Task-01.jsx'
import Party from './Task-02.jsx'

import './styles/background.css'

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Table path="table" />
        <Dashboard path="dashboard" />
        <Hook path="hook" />
        <Conver path="conver" />
        <Party path="party" />
      </Router>
    </Layout>
  );
}

export default App;
