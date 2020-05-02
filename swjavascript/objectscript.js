//Object Creation Methods
//1. Single Object
var sam = {
    name : 'sam',
    birthYear : 1990,
    job : 'teacher',
    calculateAge : function(){
        console.log(2020-this.birthYear);
    }
};
console.log(sam);
sam.calculateAge();