// const sayName = (name: string, lastName: string) => `${name} ${lastName}`;
// var greetMe = (greet: string) => void;
// sayName('luis', 'enrique');
var demo_02_07;
(function (demo_02_07) {
    var squereSimple = function (h, w) {
        return h * w;
    };
    var squereSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || 'unknown person'));
    };
    // helloWorld();
    // helloWorld('kike');
    var squareIt;
    squareIt = function (rect) {
        if (rect.w === undefined)
            return rect.h * rect.h;
        return rect.h * rect.w;
    };
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo_02_07 || (demo_02_07 = {}));
