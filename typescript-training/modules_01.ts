/// <reference path="modules_02.ts" />

module Shapes {
    export class Rectangle implements IRectangle {
        

        constructor(public height: number, public width: number) {}
        getArea() {
            return this.height * this.width;
        }


    }

    export interface IRectangle {
        height: number;
        width: number;
        getArea();
    }
}

module Shapes {
    export class Circle {
        print() {
            console.log('hi');
        }
    }
}

namespace myProgram {

    var run = () => {
        var rect: Shapes.IRectangle = new Shapes.Rectangle(10,4);    
        var are = rect.getArea();

        console.log(are);

        console.log('printing ipad');
        var ipad = new Electronics.iPad();

    ipad.printMe();
    }

    run();

    
}

