// <reference path="modules_02.ts" />

import ds = require('./dataservice')

export interface IAlerter {
    name: string;
    showMessage(): void;
}

var dataService = new ds.DataService();

export class Alerter implements IAlerter {
    name: string;    
    
    showMessage(): void {
        var msg = dataService.getMessage();

        console.warn(msg);
    }


}