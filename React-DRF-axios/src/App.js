import React from 'react';
import './App.css';

import PandemicList from './components/PandemicList';

import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
        {/* HTTP React */}
        <PostForm />
        <PandemicList />

    </div>
  );
}

export default App;
