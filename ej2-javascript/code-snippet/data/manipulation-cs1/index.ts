

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

interface IOrder {
    OrderID: string;
    CustomerID: string;
    EmployeeID: string;
}

let button: HTMLInputElement = <HTMLInputElement>document.getElementById('manipulate');
let orderid: HTMLInputElement = <HTMLInputElement>document.getElementById('OrderID');
let cusid: HTMLInputElement = <HTMLInputElement>document.getElementById('CustomerID');
let empid: HTMLInputElement = <HTMLInputElement>document.getElementById('EmployeeID');


button.onclick = () => {
    let data: IOrder = {
        OrderID: orderid.value,
        CustomerID: cusid.value,
        EmployeeID: empid.value
    };
    if (!data.OrderID) { return; }
    dm.insert(data);
    dm.executeQuery(new Query())
        .then((e: ReturnOption) => {
            table.tBodies[0].innerHTML = '';
            (<Object[]>e.result).forEach((data: Object) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};


