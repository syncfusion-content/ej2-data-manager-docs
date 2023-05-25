

import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

let table: HTMLTableElement = (<HTMLTableElement>document.getElementById('datatable'));
let dm: DataManager = new DataManager(data.slice(0, 4));

dm.executeQuery(new Query())
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });

let button: HTMLInputElement = <HTMLInputElement>document.getElementById('manipulate');
button.value = 'Remove';
let orderid: HTMLInputElement = <HTMLInputElement>document.getElementById('OrderID');
document.getElementById('CustomerID').style.display = 'none';
document.getElementById('EmployeeID').style.display = 'none';


button.onclick = () => {
    if (!orderid.value) { return; }
    dm.remove('OrderID', { OrderID: +orderid.value });
    dm.executeQuery(new Query())
        .then((e: ReturnOption) => {
            table.tBodies[0].innerHTML = '';
            (<Object[]>e.result).forEach((data: Object) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};


