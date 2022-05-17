import React from "react";
import styles from '../style/cbtn.module.css'
let Countbtn=({fn,bname})=>{
  
    return <button className={styles.btn} onClick={fn}>{bname}</button>
}

export default Countbtn;