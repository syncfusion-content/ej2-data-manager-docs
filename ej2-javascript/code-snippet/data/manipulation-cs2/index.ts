

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
button.value = 'Update';
let orderid: HTMLInputElement = <HTMLInputElement>document.getElementById('OrderID');
let cusid: HTMLInputElement = <HTMLInputElement>document.getElementById('CustomerID');
let empid: HTMLInputElement = <HTMLInputElement>document.getElementById('EmployeeID');

interface IOrder {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
}

button.onclick = () => {
    let data: IOrder = {
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    };
    if (!data.OrderID) { return; }
    dm.update('OrderID', data);
    dm.executeQuery(new Query())
        .then((e: ReturnOption) => {
            table.tBodies[0].innerHTML = '';
            (<Object[]>e.result).forEach((data: Object) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};


