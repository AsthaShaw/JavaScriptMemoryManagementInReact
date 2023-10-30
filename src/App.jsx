import React from 'react';
import {Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import { PageWrapper } from './components';



import './App.css'

function App() {


  return (
<Routes>
  <Route path="/" element={<PageWrapper />} >
  <Route index element={<Pages.HomePage />} />
  <Route path="/about" element={<Pages.AboutPage />} />
  </Route>

</Routes>

  )

};

export default App;
    
  