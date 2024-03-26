import './App.scss';
import Employees from './components/Employee/Employee';
import team from './team';


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