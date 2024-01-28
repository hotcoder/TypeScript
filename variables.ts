let date : Date = new Date();

let names : string[] = ["John", "Mary", "Peter"];

let numbers : number[] = [1, 2, 3];

console.log(names);
console.log(numbers);


class Car{

}

let car : Car = new Car();

let data : {x:number ; y:number} = {
    x : 10,
    y : 20
}



const logNumber : (i:number) => void = (i : number) => {
    return i;
}

console.log(logNumber(10));