export default  async function  fetchTickers () {
    const res = await fetch('https://api.coinlore.net/api/tickers/')
    if(!res.ok) throw new Error('failed to fetch data')
        return res.json();
}