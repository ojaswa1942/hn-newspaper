import React from 'react';
import Loader from './Components/_Loader/Loader';
import Header from './Components/Header/Header';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App} >
        <Header />
        <Loader />
    </div>
  );
}

export default App;
