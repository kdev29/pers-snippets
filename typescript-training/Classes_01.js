var Automovil = /** @class */ (function () {
    function Automovil(engine) {
        this._motor = engine;
    }
    Object.defineProperty(Automovil.prototype, "engine", {
        get: function () {
            return this._motor;
        },
        set: function (value) {
            this._motor = value;
        },
        enumerable: true,
        configurable: true
    });
    Automovil.prototype.start = function () {
        console.log('Car engine started ' + this.engine.engineType);
    };
    return Automovil;
}());
var Motor = /** @class */ (function () {
    function Motor(hp, engineType) {
        this.hp = hp;
        this.engineType = engineType;
    }
    return Motor;
}());
window.onload = function () {
    var motor = new Motor(15, 'test');
    var carro = new Automovil(motor);
    carro.start();
};
