import './App.css';
import EmployeeForm from './EmployeeForm/EmployeeForm';
import CurrentEmployeeCard from './CurrentEmployeeCard/CurrentEmployeeCard';
import { useState } from 'react';
import Header from './Header/Header';


function App() {
  const [idCounter, setIdCounter] = useState(1);
  const [employees, setEmployees] = useState([{
    firstName:"Ramisha",
    lastName:"Anwer",
    email:"ramisha@gmail.com",
    phone:"03368999008"
  }]);
  const addEmployee = (employee) => {
    const newEmployee = { ...employee, id: idCounter };
    setEmployees([...employees, newEmployee]);
    setIdCounter(idCounter + 1);
  };
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };
  
  return (
    <div className="App">
      <Header/>
      <EmployeeForm addEmployee={addEmployee} />
      
      <div className='current-employees'>

        <div className='employee-list'>
        <p className='title'>Current Employees</p>
        {employees.map((employee, index) => (
        <CurrentEmployeeCard   key={employee.id}
        employee={employee}
        onDelete={() => deleteEmployee(employee.id)} />
      ))}
        </div>
      
      </div>
    </div>
  );
}

export default App;
