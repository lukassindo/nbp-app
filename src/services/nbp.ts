import {Data} from './../models';

async function getData(): Promise<Data> {
    const currency = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json');
    console.log(currency)
    const data = await currency.json();
    const rates = data.rates;
    let inputData: [string, number][] = [];
      rates.map((item) => {
        let smallArr: [string, number] = [item.effectiveDate, item.mid];
        inputData.push(smallArr);
      })
    return inputData;
}

export default getData;