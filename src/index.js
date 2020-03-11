import {destinations} from '../datas/destinations';
import Filters from './scripts/filters';
import Cards from './scripts/Cards';
import './styles/style.sass'; 
import './styles/style.css';
import './styles/style.scss';

console.log(destinations);

let selectTarget = document.getElementById("destinations-select");
let filterCountry = null;
new Filters(destinations);
new Cards(filterCountry, destinations);

selectTarget.addEventListener("change", function(e) {
  filterCountry = e.target.value;
  new Cards(filterCountry, destinations);
})



