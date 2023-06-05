import React, {useState} from "react";
import {LoginForm} from "./components/LoginForm"
import LoginFormHook from "./components/LoginFormHook";
import BookList from "./components/BookList";
import { CounterClick } from "./components/Task4";

const styles = {
  div:{
    marginRight: '50px'
  }
}

function App() 
{

  return (
    <div className="GeneralContent">
      <div style={styles.div}> <LoginForm /> </div>
      <div style={styles.div}> <LoginFormHook/> </div>
      <div style={styles.div}> <CounterClick/> </div>
      <div style={styles.div}> <BookList/> </div>
    </div>
  );
}

export default App;
