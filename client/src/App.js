import { useEffect, useReducer, useContext } from 'react';

import { BrowserRouter as Router, Route, Routes, Redirect, BrowserRouter } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import useGetList from '../src/hooks/useGetList';

import { instsActions } from './redux-store/Insts';
import { piecesActions } from './redux-store/Library';
import { gigsActions } from './redux-store/gigs';

import './App.css';
import Layout from './UI/Layout';
import Library from './components/library/Library';
import Dashboard from './components/dashboard/Dashboard';
import Subs from './components/subs/Subs';
import Notices from './components/notices/Notices';


function App() {
  const dispatch = useDispatch();

  const insts = useGetList('insts');
  if (typeof insts === 'object') dispatch(instsActions.refresh(insts))

  const library = useGetList('pieces')
  if (typeof library === 'object') dispatch(piecesActions.refresh(library))

  const gigsResponse = useGetList('gigs');
  if (typeof gigsResponse === 'object') dispatch(gigsActions.refresh(gigsResponse));

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
    </Layout>
  );
}
export default App;
