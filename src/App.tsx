import './App.scss';
import Employees from './components/Employee/Employee';
import team from './team';
import Counter from './components/Counter/Counter';


const App = () => {
  

  return (
    <div className='ticket-container'>
      <h1 className='ticket__heading'>Ticket Tracker</h1>
    
    <div className='employees-tickets'>
      
      <section className='ticket__employees-info'>
        <Employees employees={[team[0]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>
           
      <section className='ticket__employees-info'>
        <Employees employees={[team[1]]}/>
        <Counter heading="Counter"/>
      </section>   

       <section className='ticket__employees-info'>
        <Employees employees={[team[2]]}/>
        <Counter heading="Counter"/>
      </section>  

      <section className='ticket__employees-info'>
        <Employees employees={[team[3]]}/>
        <Counter heading="Counter"/>
      </section>  


      <section className='ticket__employees-info'>
        <Employees employees={[team[4]]}/>
        <Counter heading="Counter"/>
      </section>  
    </div>
  
    </div>

  )
}


export default App;