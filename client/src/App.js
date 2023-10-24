import { useEffect, useReducer, useContext } from 'react';

import { BrowserRouter as Router, Route, Routes, Redirect, BrowserRouter } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import { instsActions } from './redux-store/Insts';

import useGetList from '../src/hooks/useGetList';

import './App.css';
import Layout from './UI/Layout';
import Library from './components/library/Library';
import Dashboard from './components/dashboard/Dashboard';
import Subs from './components/subs/Subs';
import Notices from './components/notices/Notices';
import { piecesActions } from './redux-store/Library';


function App() {
  const dispatch = useDispatch();

  const insts = useGetList('insts');
  console.log(insts)
  if (typeof insts === 'object') dispatch(instsActions.refresh(insts))

  const library = useGetList('pieces')
  console.log(library)

  if (typeof library === 'object') dispatch(piecesActions.refresh(library))


  return (
    <Layout>
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
    </Layout>
  );
}
export default App;
