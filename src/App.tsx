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
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[2]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[3]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[4]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[5]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[6]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[7]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[8]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>

      <section className='ticket__employees-info'>
        <Employees employees={[team[9]]}/>
        <div className='employee-tickets__counter'>
          <Counter heading="Counter"/>
        </div> 
      </section>


    </div>
  
    </div>

  )
}


export default App;