import { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Redirect, BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './UI/Layout';
import Library from './components/library/Library';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route />
      </Routes>
    </Layout>
  );
}
export default App;
