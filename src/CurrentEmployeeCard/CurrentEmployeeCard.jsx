import React from 'react';
import './CurrentEmployeeCard.css'
import icon from "./icon.svg"
const CurrentEmployeeCard = ({ employee, onDelete }) => {
  const { id, firstName, lastName, email, phone } = employee;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="e-card" key={id}>
      <div className="e-card-body">
        <div className='e-details'>
        <p className='name'>
          {firstName} {lastName}
        </p>
        <p className='email'>
          {email}
        </p>
        <p>
          {phone}
        </p>
        </div>
        <button onClick={handleDelete}>
        <img src={icon} alt="delete-icon"/>
        </button>
      </div>
    </div>
  );
};

export default CurrentEmployeeCard;

