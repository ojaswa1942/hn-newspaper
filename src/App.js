import React from 'react';
import Loader from './Components/_Loader/Loader';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App} >
        <Loader />
    </div>
  );
}

export default App;
