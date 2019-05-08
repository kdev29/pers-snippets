var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample.prototype.alert = function () {
        alert('hello from TS');
    };
    Sample.prototype.print = function () {
        for (var i = 0; i < 10; i++) {
            console.log('%c', i, '{color: green}');
        }
    };
    Sample.prototype.addToList = function () {
        var theList = document.getElementById('theList');
        theList.innerHTML += '<li>test</li>';
    };
    return Sample;
}());
(function () {
    document.getElementById('theButton').addEventListener('click', function () {
        var theSample = new Sample();
        theSample.addToList();
    });
})();
dde;
