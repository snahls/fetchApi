url='https://restcountries.eu/rest/v2/all';

async function getdata(url){
let response=await fetch(url);
var data=await response.json();


const name=data.name;
const flag=data.flag;
const capital=data.capital;

console.log(name+flag+capital);
}