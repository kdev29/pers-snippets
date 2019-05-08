define(["require", "exports", "./alerter"], function (require, exports, al) {
    "use strict";
    exports.__esModule = true;
    function run() {
        var alerter = new al.Alerter();
        alerter.showMessage();
    }
    exports.run = run;
});
