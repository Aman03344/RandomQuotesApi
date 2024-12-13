let authorName = document.querySelector("#authors");
let h1 = document.querySelector("#qoute");
let button = document.querySelector("#generateBtn");

const data = async () => {
  try {
    const response = await fetch('https://dummyjson.com/quotes');
    const convertedData = await response.json();

   
    setInterval(()=>{
        const randomIndex = Math.floor(Math.random() * convertedData.quotes.length);
        const quote = convertedData.quotes[randomIndex];
        authorName.innerText = quote.author;
        h1.innerText = quote.quote;
    },2500)
    
  

  } catch (error) {
    console.log(error);
  }
}

data();


