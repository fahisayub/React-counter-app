import './App.css';
import React from 'react';
import Counter from './components/Counter'
import styles from './style/counter.module.css'
function App() {


  return (
    
      <div className={styles.counter}>
        <Counter ></Counter>
      </div>

   
  );
}

export default App;
