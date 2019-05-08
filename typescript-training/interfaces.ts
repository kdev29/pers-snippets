module demo_08 {
    var squareItBasic = (num: number) => num * num;
    
    interface SquareFunction {
        (x: number): number;        
    }
    
    var squareItBasic: SquareFunction = (num) => num * num;

    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareIt: 
        (rect: Rectangle) => number;

    squareIt = function(rect) {
        if(rect.w === undefined)
            return  rect.h * rect.h;

        return rect.h * rect.w;
    }

    var rectA = {h: 7};
    var rectB = {h: 7, w: 12 };


    console.log(squareIt(rectA));
    console.log(squareIt(rectB));

    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        name: 'Luis',
        age: 27,
        kids: 0,
        calcPets: () => { return 1 * 2; },
        makeYounger: function (years: number) { 
            this.age -= years 
        },
        greet: function(msg: string) {
            return msg + ', ' + this.name
        }
    };

    console.log(p.calcPets());
    p.makeYounger(5);
    p.age;
    console.log(p.greet('hey there'));
    
    interface SessionEval {
        addRating: (rating: number) => number;
        calcRating: () => number;
    }
    

    var session: SessionEval = {
        addRating: (rating: number) => rating * 2,
        calcRating: () => { return 3 }
    }

    
    function sessionEvaluator(): SessionEval {
        var calcRating = function() {
            return 1;
        }

        var addRating = function(rating: number) {
            return rating * 2;
        }

        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
}