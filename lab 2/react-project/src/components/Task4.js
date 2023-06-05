import React, { useState } from 'react';


export function CounterClick()
{
   const [count, setCount] = useState(0)
   const styles = {
      div:{
         marginTop:"20px",
         height:"40px"
         
      },
      p:{
         margin: 0,
         marginTop: "6px" 
      }
   }

   return(
      <div className='Container'>
         <div className='field' style={styles.div}>
            <p style={styles.p}>Счетчик кликов: <b>{count}</b></p>
         </div>
         <div>
            <input className="custom-btn btn-16" type='button' value="Click!" onClick={()=>setCount(count+1)}/>
         </div>
      </div>
   )
}