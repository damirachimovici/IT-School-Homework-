let Food = class {
    constructor(name, protein, defrost, carbs, fat) {
          this.name = name,
          this.protein = protein,
          this.defrost = defrost, 
          this.carbs = carbs,                                                   // the class with the props
          this.fat = fat
    }
}

Food.prototype.Cooking = function (){
    if (this.defrost === true) 
            console.log('The ' + this.name + ' has been cooked.')               // the method 
    else 
            console.log('You have to defrost the ' + this.name + '!')
    
}

let Food1 = new Food('chicken breast', '30', true, '1', '5')                    // and the instances 
let Food2 = new Food('pljeskavica', '10', false, '40', '20')

