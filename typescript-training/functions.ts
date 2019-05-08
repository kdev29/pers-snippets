// const sayName = (name: string, lastName: string) => `${name} ${lastName}`;

// var greetMe = (greet: string) => void;

// sayName('luis', 'enrique');

module demo_02_07 {

    var squereSimple = function(h: number, w: number) {
        return h * w;
    }

    var squereSimplest = (h: number, w: number) => h * w;

    var helloWorld: (name?: string) => void;

    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || 'unknown person'));
    }

    // helloWorld();

    // helloWorld('kike');

    var squareIt: 
        (rect: {h: number, w?: number}) => number;

    squareIt = function(rect) {
        if(rect.w === undefined)
            return  rect.h * rect.h;

        return rect.h * rect.w;
    }

    var rectA = {h: 7};
    var rectB = {h: 7, w: 12 };


    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
    
}