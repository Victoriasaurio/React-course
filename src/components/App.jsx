import React from 'react';
import {Router} from '@reach/router';

import Home from '../pages/Home.jsx';
import Table from '../pages/Table.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Layout from './Layout';

import './styles/background.css'

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Table path="table" />
        <Dashboard path="dashboard" />
      </Router>
    </Layout>
  );
}

export default App;
