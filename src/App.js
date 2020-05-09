import React from 'react';
import ArticleContainer from './Components/ArticleContainer/ArticleContainer';
import Header from './Components/Header/Header';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App} >
        <Header />
        <ArticleContainer />
    </div>
  );
}

export default App;
