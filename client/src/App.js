import { useEffect, useReducer, useContext } from 'react';

import { BrowserRouter as Router, Route, Routes, Redirect, BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './UI/Layout';
import Library from './components/library/Library';
import Dashboard from './components/dashboard/Dashboard';
import Subs from './components/subs/Subs';
import Notices from './components/notices/Notices';

import generalStore from './contextStore/general-store';

const initialInsts = {
  insts: [],
};

const instsReducer = (state, action) => {
  switch (action.type) {
    case 'insts':
      return { ...state, insts: action.insts };
  }
};

function App() {
  const [dashboard, dispatch] = useReducer(instsReducer, initialInsts);

  useEffect(() => {
    const getInsts = async () => {
      try {
        const reply = await fetch('http://localhost:3000/insts');
        if (reply.ok) {
          const jsonified = await reply.json();
          dispatch({ type: 'insts', insts: jsonified });
        }
      } catch (err) {
        console.log(err);
      }
    };
    getInsts();
  }, []);

  return (
    <Layout>
      <generalStore.Provider value={{ dashboard, dispatch }}>
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </generalStore.Provider>
    </Layout>
  );
}
export default App;
