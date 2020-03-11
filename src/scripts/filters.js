export default class Filters {
    constructor(destinations) {
        this.destinations = destinations;
        this.target = document.getElementById("destinations-select");
        this.options = this.buildOptionsSelect();
        this.render();
    }

    buildOptionsSelect(){
        let options =  this.destinations.map(destination => destination.country );
        return options;
    }

    removeDuplicates(array) {
        let unique = {};
        array.forEach(function(i) {
          if(!unique[i]) {
            unique[i] = true;
          }
        });
        return Object.keys(unique);
    }

    render(){
        this.options = this.removeDuplicates(this.options);
        this.options.map((option) => {
            var newOption = new Option (option, option);
            this.target.options.add (newOption);
        });
    }
  }