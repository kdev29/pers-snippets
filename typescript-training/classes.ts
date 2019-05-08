class Car {

    private _engine: string;

    constructor(engine: string) {
        this._engine = engine;
    }

    get engine(): string {
        return this._engine;
    }

    set engine(value: string) {
        if(value == undefined)
            throw 'Supply an Engine!';
        this._engine = value;
    }
}

// class Carr {
//     constructor(public engine: string) {}
// }


/***Complex types ***/


class Engine {
    constructor(public horsePower: number, 
                public engineType: string) {}
    
}

class Carro {
    private _engine: Engine;

    constructor(public engine: Engine) {}
}

