var Calculator = /** @class */ (function () {
    function Calculator() {
        this.x = document.getElementById('x');
        this.y = document.getElementById('y');
        this.output = document.getElementById('result');
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('btnCalculate').addEventListener('click', function (e) {
            _this.output.innerHTML = (parseInt(_this.x.value) + parseInt(_this.y.value)).toString();
        });
    };
    return Calculator;
}());
window.onload = function () {
    var calc = new Calculator();
};
