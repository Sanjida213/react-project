import React, { FormEvent, useState } from "react";
import "./Employee.scss";
import Employee from "../../teamsTypes";
import Counter from "../Counter/Counter";

type TeamProps = {
  employees: Employee[];
};



const Employees = ({ employees }: TeamProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchValue(input)
  };

  const filteredName = employees.filter((employee) => employee.name.toLowerCase().includes(searchValue))
  
  return (
    <div className="employee-container">

      <input
        type="text"
        placeholder="Search by name..."
        value={searchValue}
        onChange={handleInput}
      />

       {filteredName.map((employee) => (
      <div className="employee-info" key={employee.id}>
          
        <div className="employee__name-role">
          <p className="employee-content__names">
           Name: {employee.name}
         </p>
         <p className="employee-content__roles">
           Role: {employee.role}
         </p>
        </div>

        <Counter heading="Counter"/>
         
      </div>
        ))};
       
    </div>
  );
};
export default Employees;
