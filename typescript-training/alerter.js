// <reference path="modules_02.ts" />
define(["require", "exports", "./dataservice"], function (require, exports, ds) {
    "use strict";
    exports.__esModule = true;
    var dataService = new ds.DataService();
    var Alerter = /** @class */ (function () {
        function Alerter() {
        }
        Alerter.prototype.showMessage = function () {
            var msg = dataService.getMessage();
            console.warn(msg);
        };
        return Alerter;
    }());
    exports.Alerter = Alerter;
});
