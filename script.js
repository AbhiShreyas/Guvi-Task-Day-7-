//1.Solving problems using array functions on rest countries data.(https://restcountries.com/v3.1/all)

//a.Get all the countries from Asia continent/region using Filter function.
let request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload= function(){
    let result = JSON.parse(request.response);
    result.filter(country => country.region == "Asia")
          .forEach(country =>(console.log(country.name.common,"is in the region",country.region)))
  }

//b.Get all the countries with a population of less than 2 lakhs using Filter function.
let request2 = new XMLHttpRequest()
request2.open("GET", "https://restcountries.com/v3.1/all")
request2.send();
request2.onload= function(){
    let result2 = JSON.parse(request.response);
    result2.filter(country => country.population <= 200000)
          .forEach(country =>(console.log(country.name.common,country.population)))
  }

//c.Print the following details name,capital, flag using forEach function.
let request3 = new XMLHttpRequest()
request3.open("GET","https://restcountries.com/v3.1/all")
request3.send();
request3.onload=function(){
    let result3 = JSON.parse(request3.response)
    result3.forEach(country=>(console.log(country.name.common, country.capital, country.flag)))
}

//d.Print the total population of countries using reduce function.
let request4 = new XMLHttpRequest()
request4.open("GET", "https://restcountries.com/v3.1/all")
request4.send()
request4.onload = function(){
    let result4 = JSON.parse(request4.response)
    let final =result4.reduce ((totalPopulation , Country)=> totalPopulation + Country.population,0)
console.log("Total Population of countries:",final)}

//e.Print the country that uses US dollars as currency
let request5 = new XMLHttpRequest()
request5.open("GET", "https://restcountries.com/v3.1/all")
request5.send()
request5.onload = function () {
    let result5 = JSON.parse(request5.response)
    for (let i = 0; i < result5.length; i++) {
        if (result5[i].currencies.USD && result5[i].currencies.USD.name === "United States dollar") {
            console.log("The currency of",result5[i].name.common,"is",result5[i].currencies.USD.name);
        }
    }
}


