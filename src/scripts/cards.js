import clos from '../assets/images/CLOS_DU_LITTORAL.png'

export default class Cards {
    constructor(filterCountry, destinations) {
        this.target = document.querySelector('.container-cards');
        this.filterCountry = filterCountry;
        this.destinations = destinations;
        this.cards = "";

        this.buildCards(this.filterCountry, this.destinations);
        this.render();
    }

    buildCards(filterCountry, destinations){
        console.log('filterCountry', filterCountry)

        if (filterCountry != null){
            destinations.map((destination, index) => {
                if (filterCountry === destination.country){
                    this.cards += `<article id="slider">
                    <div id="desc-slider-${index}">
                        <img src="${clos}" />
                    </div>
                    <div id="desc-card-${index}">
                        <div>
                            <p><strong>${destination.country} -</strong> ${destination.place}</p>
                            <p>${destination.label}</p><span> nb *</span>
                            <span>${destination.tags.length != 0 ? destination.tags[0].label : ""}</span><span>${destination.tags.length != 0 ? destination.tags[1].label : ""}</span>
                        </div>
                        <div>
                        </div>
                    </div>
                </article>`;
                }
            });
        }
        else{
            destinations.map((destination, index) => {
                this.cards += `<article id="slider">
                            <div id="desc-slider-${index}">
                                <img src="../assets/images/CLOS_DU_LITTORAL.png" />
                            </div>
                            <div id="desc-card-${index}">
                                <div>
                                    <p><strong>${destination.country} -</strong> ${destination.place}</p>
                                    <p>${destination.label}</p><span> nb *</span>
                                    <span>${destination.tags.length != 0 ? destination.tags[0].label : ""}</span><span>${destination.tags.length != 0 ? destination.tags[1].label : ""}</span>
                                </div>
                                <div>
                                </div>
                            </div>
                        </article>`;
            });

        }
    }

    render(){
        this.target.innerHTML = this.cards;
    }
  }

  //icons
//slider div