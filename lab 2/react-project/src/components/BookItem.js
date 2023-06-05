import React from "react";

export function BookItem({book}) {
   
   const styles ={
      div:{

      },
      spis:{
         justifyContent: 'space-between',
         padding: '.5rem 1rem',
         border: '1px solid #ccc',
         borderRadius: '4px',
         marginBottom: '.5rem'
       }
   } 
   
   return (
    <div style={styles.spis}>
      {console.log(book)}
      Книга: {book}
    </div>
  );
}
