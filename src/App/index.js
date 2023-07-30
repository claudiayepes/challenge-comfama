import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { AnimeProvider } from '../Context';

function App() {
  return (
    <AnimeProvider>
        <AppUI/>
    </AnimeProvider>

  );
}

export default App;
