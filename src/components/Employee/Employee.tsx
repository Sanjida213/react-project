import "./Employee.scss";
import Employee from "../../teamsTypes";
import Counter from "../Counter/Counter";

type TeamProps = {
  employees: Employee[];
};



const Employees = ({ employees }: TeamProps) => {
  
  // const employees = [...employee] /// maybe add employee here and then inside return map 

  return (
    <div className="employee-container">
       <div className="employee-card">
       {employees.map((employee) => (
        <div className="employee-info" key={employee.id}>
          <div>
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
       
    </div>
  );
};
export default Employees;


