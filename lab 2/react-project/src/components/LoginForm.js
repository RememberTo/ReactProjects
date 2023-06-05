import React from 'react';

export class LoginForm extends React.Component {
   Name
   Surname
   Email
   PhoneNumber
   Gender
   Warning
 
   constructor(props) {
     super(props);
     
     this.Gender= {value: "Мужской"}

     this.NameChange = this.NameChange.bind(this);
     this.SurnameChange = this.SurnameChange.bind(this);
     this.EmailChange = this.EmailChange.bind(this);
     this.PhoneNumberChange = this.PhoneNumberChange.bind(this);
     this.GenderChange = this.GenderChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
 
   NameChange(event) {
     this.Name = event.target.value
   }
   SurnameChange(event) {
     this.Surname = event.target.value
   }
   EmailChange(event) {
     this.Email = event.target.value
   }
   PhoneNumberChange(event) {
     this.PhoneNumber = event.target.value
   }
   GenderChange(event) {
     this.Gender.value = event.target.value
   }
 
   handleSubmit(event) {
      alert(
         "Имя: " +
         this.Name +
           "\nФамилия: " +
           this.Surname +
           "\nПочта: " +
           this.Email +
           "\nТелефон: " +
           this.PhoneNumber +
           "\nПол: " +
           this.Gender.value
       );
      event.preventDefault(); 
   }
 
   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <h3>Контактная форма</h3>
       <div className="container">
             <div className="field" >
               <label htmlFor="name">Имя </label>
               <input name='name' required placeholder="Иван" onChange={this.NameChange} type="text"/>
             </div>
             <div className="field" >
               <label>Фамилия </label>
               <input id='Surname' required placeholder="Иванов" onChange={this.SurnameChange} type="text"/>
             </div>
             <div className="field" >
               <label>Email </label>
               <input id='Email' type="email" required placeholder="test@mail.ru" onChange={this.EmailChange}/>
             </div>
             <div className="field" >
               <label>Номер телефона </label>
               <input id='PhoneNumber' type="number" required placeholder="8(910)-542-12-45"  onChange={this.PhoneNumberChange}/>
             </div>
             <div className="field" >
               <label>Пол </label>
               <select onChange={this.GenderChange}>
                   <option selected value='Мужской'>Мужской</option>
                   <option value='Женский'>Женский</option>
               </select>
             </div>
             <div>
               <input className="custom-btn btn-16"  type="submit" value="Отправить" />
             </div>
         </div>
    </form>
     );
   }
 }
 

