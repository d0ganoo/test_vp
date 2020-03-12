import clos from '../assets/images/CLOS_DU_LITTORAL.png';
import sri from '../assets/images/ECHAPEE_SRI_LANKAISE.png';
import plages from '../assets/images/ENTRE_CULTURE_ET_PLAGES.png';
import dubai from '../assets/images/FAIRMONT_DUBAI.png';
import creek from '../assets/images/HYATT_REGENCY_CREEK.png';
import japon from '../assets/images/JAPON.jpg';
import patra from '../assets/images/STHALA_MARC_PATRA.png';

export default class Cards {
    constructor(filterCountry, destinations) {
        this.target = document.querySelector('.container-cards');
        this.filterCountry = filterCountry;
        this.destinations = destinations;
        this.cards = "";

        this.buildCards(this.filterCountry, this.destinations);
        this.render();
    }

    randomImg(){
        let imgArr = [clos, sri, plages, dubai, creek, japon, patra];
        return imgArr[Math.floor(Math.random() * (6 - 0 + 1)) + 0];
    }

    returnStars(nb){
        let stars = "";
        for (let i = 0; i != nb; i++){
            stars += '<i class="material-icons">star</i>';
        }
        return stars;
    }

    buildCards(filterCountry, destinations){
        if (filterCountry != null){
            destinations.map((destination, index) => {
                if (filterCountry === destination.country){
                    this.buildCardsAllDestinations(destination, index);
                }
                if (filterCountry === ""){
                    this.buildCardsAllDestinations(destination, index);
                }
            });
        }
        else{
            destinations.map((destination, index) => {
                this.buildCardsAllDestinations(destination, index);
            });

        }
    }

    buildCardsAllDestinations(destination, index){
        this.cards += `<article id="slider">
                            <div id="desc-slider-${index}" class="desc-slider">
                                <img src="${this.randomImg()}" />
                            </div>
                            <div id="desc-card-${index}" class="desc-card">
                                <div>
                                    <p><strong>${destination.country} -</strong>${destination.place}</p>
                                    <p>${destination.label} <span>${this.returnStars(Number(destination.rating[0]))}</span> </p>
                                    <div>
                                        <span>${destination.tags.length != 0 ? destination.tags[0].label.toUpperCase() : ""}</span><span>${destination.tags.length != 0 ? destination.tags[1].label.toUpperCase() : ""}</span>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                    <i class="material-icons">
                                        keyboard_arrow_right
                                    </i>
                                    </span>
                                </div>
                            </div>
                        </article>`;
        return this.cards;
    }

    render(){
        this.target.innerHTML = this.cards;
    }
  }
