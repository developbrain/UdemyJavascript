//Coding Channlenge Tip Calculator
/*
var johnBillArr = [124,48,268];
var johnTipArr = [];
var johnFinalBill = [];

johnBillArr.forEach(johnTipFunction);
function johnTipFunction(value, index, array) {
    let tip;
    if(value < 50)
    {
        tip = value*0.20;
        johnTipArr.push(tip);
        johnFinalBill.push(tip+value);
    }
    else if(value > 50 && value < 200)
    {
        tip = value*0.15;
        johnTipArr.push(tip);
        johnFinalBill.push(tip+value);
    }
    else
    {
        tip = value*0.10;
        johnTipArr.push(tip);
        johnFinalBill.push(tip+value);
    }
}

console.log(johnBillArr);
console.log(johnTipArr);
console.log(johnFinalBill);
*/

/*
//Coding Challenge BMI Calculator Using Object
function Person(name, mass, height) {
    this.firstName = name;
    this.firstmass = mass;
    this.firstheight = height;
    this.bmi = function() {return (this.firstmass/(this.firstheight*this.firstheight))};
}
var MarkObject = new Person('Mark', 75, 1.56);
var JohnObject = new Person('John', 75, 1.56);
console.log(MarkObject);
console.log(MarkObject.bmi());
console.log(JohnObject);
console.log(JohnObject.bmi());

if(MarkObject.bmi() > JohnObject.bmi())
{
    console.log(MarkObject.firstName+' has BMI '+ MarkObject.bmi() +' greater than '+ JohnObject.firstName + '\'s BMI '+ JohnObject.bmi())
}
else if (MarkObject.bmi() < JohnObject.bmi())
{
    console.log(MarkObject.firstName+' has BMI '+ MarkObject.bmi() +' which is less than '+ JohnObject.firstName + '\'s BMI '+ JohnObject.bmi())
}
else
{
    console.log(MarkObject.firstName+' has BMI '+ MarkObject.bmi() +' which is same as '+ JohnObject.firstName + '\'s BMI '+ JohnObject.bmi())
}
*/

/*
//Coding Challenge Tip Calculator Using Object
var johnObject = {
    billArr : [124,48,268,180,42],
    tipArr : [],
    finalBillArr : [],
    tipCalc : function() {
        for (let index = 0; index < this.billArr.length; index++) {
            if(this.billArr[index] < 50)
            {
                let tip = this.billArr[index]*0.2;
                this.tipArr[index] = tip;
                this.finalBillArr[index] = this.billArr[index]+tip;
            }
            else if(this.billArr[index] > 50 && this.billArr[index] < 200)
            {
                let tip = this.billArr[index]*0.15;
                this.tipArr[index] = tip;
                this.finalBillArr[index] = this.billArr[index]+tip;
            }
            else
            {
                let tip = this.billArr[index]*0.1;
                this.tipArr[index] = tip;
                this.finalBillArr[index] = this.billArr[index]+tip;
            }
        }
    }
};
johnObject.tipCalc();
//console.log(johnObject);
//console.log(johnObject.tipArr);
console.log(johnObject.finalBillArr);
var markObject = {
    billArr : [77,375,110,45],
    tipArr : [],
    finalBillArr : [],
    tipCalc : function() {
        for (let index = 0; index < this.billArr.length; index++) {
            if(this.billArr[index] < 100)
            {
                let tip = this.billArr[index]*0.2;
                this.tipArr[index] = tip;
                this.finalBillArr[index] = this.billArr[index]+tip;
            }
            else if(this.billArr[index] > 100 && this.billArr[index] < 300)
            {
                let tip = this.billArr[index]*0.1;
                this.tipArr[index] = tip;
                this.finalBillArr[index] = this.billArr[index]+tip;
            }
            else
            {
                let tip = this.billArr[index]*0.25;
                this.tipArr[index] = tip;
                this.finalBillArr[index] = this.billArr[index]+tip;
            }
        }
    }
};
markObject.tipCalc();
//console.log(markObject);
//console.log(markObject.tipArr);
console.log(markObject.finalBillArr);

function averageCalc(valueArr)
{
    let total = 0;
    for (let index = 0; index < valueArr.length; index++) {
        total = total+valueArr[index];
    }
    return total/valueArr.length;
}

var johnBillAvg = averageCalc(johnObject.finalBillArr);
console.log(johnBillAvg);
var markBillAvg = averageCalc(markObject.finalBillArr);
console.log(markBillAvg);
if(johnBillAvg > markBillAvg)
    console.log('John has highest bill average');
else if(johnBillAvg == markBillAvg)
    console.log('John and Mark have same bill average');
else
    console.log('Mark has highest bill average');

//Javascript Hoisting Practice
*/

/*
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.fullName = function(){return this.firstName+' '+this.lastName};

console.log(person);
console.log(person.fullName());
*/

//this keyword to View current window Object
//console.log(this);

//Get Random Value From Array
//const diceValArr = [1,2,3,4,5,6];
//const diceRandVal = diceValArr[Math.floor(Math.random() * diceValArr.length)];
//console.log(diceValArr);
//console.log(diceRandVal);

//const diceRandVal = Math.floor(Math.random() * 6)+1;
//console.log(diceRandVal);

console.log(this);
console.log(document);