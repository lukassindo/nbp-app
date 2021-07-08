import React, {useEffect, useState, useMemo} from 'react';
import './App.css';
import getData from './services/nbp';
import { Chart } from 'react-charts';
import Box from './components/Box'

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
        <Box className="dataBox">
        <Chart data={data} axes={axes} series={series} tooltip/>
        </Box>
        </div>
      </main>
    </div>
  )
}

export default App;
