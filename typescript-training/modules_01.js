/// <reference path="modules_02.ts" />
var Shapes;
(function (Shapes) {
    var Rectangle = /** @class */ (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.print = function () {
            console.log('hi');
        };
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var myProgram;
(function (myProgram) {
    var run = function () {
        var rect = new Shapes.Rectangle(10, 4);
        var are = rect.getArea();
        console.log(are);
        console.log('printing ipad');
        var ipad = new Electronics.iPad();
        ipad.printMe();
    };
    run();
})(myProgram || (myProgram = {}));
