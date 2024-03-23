import './App.scss';
import Employees from './components/Employee/Employee';
import team from './team';


const App = () => {


  return (
    <div className='ticket-container'>
      <h1 className='ticket_heading'>Ticket Tracker</h1>
    
      <section className='employee'>
        <Employees names={team} roles={team}/>
      </section>
           
    </div>

  )
}


export default App;