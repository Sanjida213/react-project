import team from "../../team";
import "./Employee.scss";
import Team from "../../teamsData";

type TeamProps = {
  // id: Team[];
  names: Team[];
  roles: Team[];
};

const Employees = ({ names, roles }: TeamProps) => {
  // const teamsArr = [...team]
  // const teamsNames = teamsArr.map(team => {
  //   return (team.name)
  // })

  // const teamsRoles = teamsArr.map(team => {
  //   return (team.role)
  // })
  return (
    <div className="employee-content">
      {/* <p>{teamsNames}</p>
      <p>{teamsRoles}</p> */}
      {names.map((team) => {
        return (
          <p key={team.id} className="employee-content__names">
            {team.name}
          </p>
        );
      })}

      {roles.map((team) => {
        return <p className="employee-content__roles">{team.role}</p>;
      })}
    </div>
  );
};

export default Employees;
