var Electronics;
(function (Electronics) {
    var iPad = /** @class */ (function () {
        function iPad() {
            this.brand = 'Apple';
        }
        iPad.prototype.printMe = function () {
            console.warn(this.brand);
        };
        return iPad;
    }());
    Electronics.iPad = iPad;
})(Electronics || (Electronics = {}));
