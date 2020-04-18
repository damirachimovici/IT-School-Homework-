let Worker = class {
    constructor(name,hourRate) {
       this.name = name,                                                       //the class
       this.hourRate = hourRate
       Worker.prototype.calculateWage = function(){
                    let Wage = this.hours * this.hourRate            
                        console.log(Wage)
        }
    }
};

let Worker1 = new Worker('Marx', 8)                                            //each instance
let Worker2 = new Worker('Lennon', 10)

Worker1.hours = 30                                                             //adding a new property 
Worker2.hours = 40
