class Calculator {
    x: HTMLInputElement;
    y: HTMLInputElement;
    output: HTMLSpanElement;

    constructor() {
        this.x = <HTMLInputElement>document.getElementById('x');
        this.y = <HTMLInputElement>document.getElementById('y');
        this.output = <HTMLSpanElement>document.getElementById('result');
        
        this.wireEvents();
    }

    wireEvents() {
        document.getElementById('btnCalculate').addEventListener('click',e => {
            this.output.innerHTML = (parseInt(this.x.value) + parseInt(this.y.value)).toString();
        });
    }
}

window.onload = () => {
    var calc = new Calculator();

    
}