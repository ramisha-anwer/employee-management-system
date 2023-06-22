import React, { useState } from 'react';
import './EmployeeForm.css';


const EmployeeForm = ({ addEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddEmployee = (event) => {
    event.preventDefault();
    // Perform employee addition logic here
    // You can access the entered data using the state variables (firstName, lastName, email, phone)
    console.log('Adding employee:',{ firstName, lastName, email, phone } );
    const newEmployee = {
      firstName,
      lastName,
      email,
      phone
    };

    addEmployee(newEmployee);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  const handleClearAll = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">New Employee</div>
        <div className="card-body">
          <form onSubmit={handleAddEmployee}>
            <div className='input-div'>
            <div className="label-group">
              <label htmlFor="firstName">First Name</label>
              <label htmlFor="lastName">Last Name</label>
              <label htmlFor="email">Email</label>
              <label htmlFor="phone">Phone</label>
            </div>

            <div className="form-group">
            <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required

              />
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />    
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            </div>
            <div className='buttons'>
          <button type="button" className="btn btn-secondary" onClick={handleClearAll}>
              Clear All
            </button>
          <button type="submit" className="btn btn-primary">
              Add 
            </button>
           
            </div>      
          </form>

        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
