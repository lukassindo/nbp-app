import React, {useEffect, useState} from 'react';
import './App.css';
import getData from './services/nbp';
import {Item} from './models';


const App = () => {   
  const [currency, setCurrency] = useState([]);

  useEffect(() => {

    async function getCurrency() {
      const data = await getData();
      console.log(data);
      setCurrency(data);
    }
    getCurrency();
    
  }, []);
  
 
   console.log(currency);

  

  return ( 

    <div className="App">
      <header className="App-header">
        <h1>NBP App</h1>
      </header>
      <main>
        <ul>
        {currency.map((item:Item, index) => (
          <ul key={index}>
            <li>{item.effectiveDate}</li>
            <li>{item.mid}</li>
          </ul>
          ))}     
        </ul>
      </main>
    </div>
  )
}

export default App;
