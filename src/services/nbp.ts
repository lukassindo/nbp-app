

async function getData(): Promise<any>  {
    const currency = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json');
    const data = await currency.json();
    return data.rates;
}

export default getData;