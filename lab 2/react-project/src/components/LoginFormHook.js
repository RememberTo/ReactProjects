import React, { useState } from "react";

function LoginFormHook() {
   const [name, setName] = useState("");
   const [sname, setSname] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [gender, setGender] = useState("мужской");

  const styles = {
    div:{
      justifyContent: 'space-between',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    }
  }

   function handleSubmit(e) {
     e.preventDefault();
     alert(
       "Имя: " +
         name +
         "\nФамилия: " +
         sname +
         "\nПочта: " +
         email +
         "\nТелефон: " +
         phone +
         "\nПол: " +
         gender
     );
   }

   return (
     <form className="demoForm" onSubmit={handleSubmit}>
       <h3>Контактная форма</h3>
       <div style={styles.div} >
         <label htmlFor="name">Имя</label>
         <input
           type="text"
           required
           name="name"
           placeholder="Иван"
           onChange={(e) => {
             setName(e.target.value);
           }}
         />
       </div>
       <div style={styles.div}>
         <label htmlFor="sname">Фамилия</label>
         <input
           type="text"
           name="sname"
           placeholder="Иванов"
           onChange={(e) => {
             setSname(e.target.value);
           }}
         />
       </div>
       <div style={styles.div}>
         <label htmlFor="email">Email</label>
         <input
           type="email"
           required
           name="email"
           placeholder="test@mail.ru"
           onChange={(e) => {
             setEmail(e.target.value);
           }}
         />
       </div>
       <div style={styles.div}>
         <label htmlFor="phone">Номер телефона</label>
         <input
           type="number"
           required
           name="phone"
           placeholder="8(910)-542-12-45"
           onChange={(e) => {
             setPhone(e.target.value);
           }}
         />
       </div>
       <div style={styles.div} class="select">
         <label htmlFor="gender">Пол</label>
         <select
           name="gender"
           onChange={(e) => {
             setGender(e.target.value);
           }}
         >
           <option value="мужской">Мужской</option>
           <option value="женский">Женский</option>
         </select>
       </div>
       <button className="custom-btn btn-16" type="submit">
         Отправить
       </button>
     </form>
   );
 }

 export default LoginFormHook;
