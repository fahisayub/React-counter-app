import React from "react";
import Countbtn from "./Countbtn";
import styles from '../style/counter.module.css'
const Counter=()=>{
    const [counter,setCounter]=React.useState(0);

    let handlevalue=(value)=>{
      if(value===-1&&counter===0 ){
       
      }else{
        setCounter(counter+value);
      }
      
    }
    let doublevalue=(val)=>{
      setCounter(counter*val)
    }
    // let btns=[
    //   {fn:handlevalue(1),bname:'Increment'},
    //   {fn:handlevalue(-1),bname:'Decrement'},
    //   {fn:doublevalue(2),bname:'Doubel'}
    // ]

    return <>
    <h2>Counter App</h2>
        <h1 className={styles.count}>{counter}</h1>
      
            <div>
              <Countbtn fn={()=>{handlevalue(1)}} bname='Increment' />
              <Countbtn fn={()=>{handlevalue(-1)}} bname='Decrement' />
              
            </div>
            <Countbtn fn={()=>{doublevalue(2)}} bname='Double'/>

            
         
    </>
}
export default Counter;