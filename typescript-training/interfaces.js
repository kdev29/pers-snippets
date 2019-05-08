var demo_08;
(function (demo_08) {
    var squareItBasic = function (num) { return num * num; };
    var squareItBasic = function (num) { return num * num; };
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
    var p = {
        name: 'Luis',
        age: 27,
        kids: 0,
        calcPets: function () { return 1 * 2; },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
    console.log(p.calcPets());
    p.makeYounger(5);
    p.age;
    console.log(p.greet('hey there'));
})(demo_08 || (demo_08 = {}));
//# sourceMappingURL=interfaces.js.map