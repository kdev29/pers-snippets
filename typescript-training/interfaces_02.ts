interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (startStatus: boolean, engineType: string) => void): void;    
}

class NewEngine implements IEngine {

    constructor(public horsePower: number, public engineType: boolean) { }

    start(callback: (startStatus: boolean, engineType: string) => void): void {
        
        callback(true, this.engineType.toString())
    }
    stop(callback: (startStatus: boolean, engineType: string) => void): void {
        console.log('starting engine ');
    }
    

    
}

window.onload = () => {
    var custom = new NewEngine(1500, true);
    var callback = (startStatus: boolean, engineType: string) => {
        console.log('callback');
    };
    custom.start((startStatus: boolean, engineType: string) => {
        console.log('callback inline');
    });
    custom.start(callback);
    
};