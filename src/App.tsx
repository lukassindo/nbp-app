import React, {useEffect, useState, useMemo} from 'react';
import './App.css';
import getData from './services/nbp';
import {Item} from './models';
import { Chart } from 'react-charts';


const App = () => {   
  const [currency, setCurrency] = useState<[string, number][]>([]);

  useEffect(() => {
  
    async function getCurrency() {
      const data = await getData();
      setInterval(async()=> {
        const data = await getData();
        setCurrency(data);
      },300000)
      setCurrency(data);
    }
    getCurrency();
  }, []);
  
 
  const data = useMemo(
    () => {
      return [
      {
        label: 'PLN',
        data: currency,
      }
    ]},
    [currency]
  )
  const series = useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )

  return ( 
    
    <div className="App">
      <header className="App-header">
        <h1>NBP App</h1>
        <h3 style={{marginTop: 0}}>PLN Rates from last week</h3>
      </header>
      <main>
        <div className="chart-container">
        <div style={{height: '300px', width: '575px'}}>
        <Chart data={data} axes={axes} series={series} tooltip/>
        </div>
        </div>
      </main>
    </div>
  )
}

export default App;
