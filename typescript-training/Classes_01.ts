class Automovil {
    private _motor: Motor;

    constructor(engine: Motor){
        this._motor = engine;
    }

    get engine(): Motor {
        return this._motor;
    }

    set engine(value: Motor) {
        this._motor = value;
    }

    start(): void {
        console.log('Car engine started ' + this.engine.engineType);
    }
}

class Motor {
    constructor(public hp: number, 
                public engineType: string) {}
}

window.onload = function() {
    var motor =  new Motor(15, 'test');
    var carro = new Automovil(motor);

    carro.start();
};