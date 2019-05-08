class Sample {
    alert() {
        alert('hello from TS');
    }

    print() {
        for(let i = 0; i < 10; i++) {
            console.log('%c', i, '{color: green}');
        }
    }

    addToList() {
        const theList: HTMLElement = document.getElementById('theList');

        theList.innerHTML += '<li>test</li>';
    }
}

interface Dog  {

}

module moduleOne {
    var data: any;
    var info;
    var doSomething = function(arg: any) {
        return arg;
    }

    var x = doSomething(5);

    export class nest {

    }
}

(function() {    
    
    document.getElementById('theButton').addEventListener('click', () => {
        const theSample = new Sample();        
        theSample.addToList();
    });

})();

moduleOne.nest