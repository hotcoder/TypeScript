const add = (a, b) => a + b;

const add1 = (a:number, b:number) : number => {return a + b};

const add2 = (a:number, b:number) => {return a + b};

const logMessage = (message:string):void => {
    console.log(message);
}

const throwError = (message:string):never => {
    throw new Error(message);
}