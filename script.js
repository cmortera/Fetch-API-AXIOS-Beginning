
// fetch('https://api.cryptonator.com/api/full/btc-usd')
//   .then(data => {
//     console.log("Response waiting to parse...", data)
//     return data.json()
//   })
//   .then(data => {
//     console.log("Data:",)
//     console.log(data.ticker.price)
//   })
//   .catch(error => {
//     console.log(`Error @ ${error}`)
//   })

// const fetchBitcoinPrice = async () => {
//   try {
//   const res = await fetch('https://api.cryptonator.com/api/full/btc-usd')
//   const data = await res.json()
//   console.log(data.ticker.price)
//   }
// }
// fetchBitcoinPrice()

//AXIOS

const bitcoinPrice = async () => {
  try {
    const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd');
    console.log(res.data.ticker.price)
  } catch (e) {
    console.log(e)
  }
}
bitcoinPrice()

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
  try {
    const config = { headers: {Accept: 'application/json'} }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke
  } catch (e) {
    return "No jokes at the moment!"
  }
}
const addJoke = async () => {
  const joke = await getDadJoke();
  const newLi = document.createElement('li');
  newLi.append(joke);
  jokes.append(newLi)

}

button.addEventListener('click', addJoke)




