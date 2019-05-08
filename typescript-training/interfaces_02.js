var NewEngine = /** @class */ (function () {
    function NewEngine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    NewEngine.prototype.start = function (callback) {
        callback(true, this.engineType.toString());
    };
    NewEngine.prototype.stop = function (callback) {
        console.log('starting engine ');
    };
    return NewEngine;
}());
window.onload = function () {
    var custom = new NewEngine(1500, true);
    var callback = function (startStatus, engineType) {
        console.log('callback');
    };
    custom.start(function (startStatus, engineType) {
        console.log('callback inline');
    });
    custom.start(callback);
};
