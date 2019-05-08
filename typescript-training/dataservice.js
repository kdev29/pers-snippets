define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var DataService = /** @class */ (function () {
        function DataService() {
            this.msg = 'Welcome to the show';
        }
        DataService.prototype.getMessage = function () {
            return this.msg;
        };
        return DataService;
    }());
    exports.DataService = DataService;
});
