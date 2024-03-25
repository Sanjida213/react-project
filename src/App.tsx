import './App.scss';
import Employees from './components/Employee/Employee';
import team from './team';

// we want to put the counter component inside the employee component and then
// instead of team[0] we want to map over it so it gets each team employee. we can do this in apps.tsx
const App = () => {

  return (
    <div className='ticket-container'>
      
      <h1 className='ticket__heading'>Ticket Tracker</h1>
    
    <div className='ticket__employees'>
      
      <section>
       <div className='ticket__employees-info'>
       <Employees employees={team}/>
       </div>
      </section>

    </div>
  
    </div>

  )
}


export default App;