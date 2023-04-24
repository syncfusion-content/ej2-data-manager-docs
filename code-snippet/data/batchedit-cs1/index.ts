

import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

let table: HTMLTableElement = (<HTMLTableElement>document.getElementById('datatable'));
let dm: DataManager = new DataManager({ json: (<Object[]>data).slice(0, 4) });

dm.executeQuery(new Query())
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
let changes: { changedRecords: Object[], addedRecords: Object[], deletedRecords: Object[] } = {
    changedRecords: [], addedRecords: [], deletedRecords: []
};
let orderid: HTMLInputElement = <HTMLInputElement>document.getElementById('OrderID');
let cusid: HTMLInputElement = <HTMLInputElement>document.getElementById('CustomerID');
let empid: HTMLInputElement = <HTMLInputElement>document.getElementById('EmployeeID');

document.getElementById('added').onclick = () => {
    changes.addedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
    orderid.value = cusid.value = empid.value = null;
};
document.getElementById('changed').onclick = () => {
    changes.changedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
    orderid.value = cusid.value = empid.value = null;
};
document.getElementById('deleted').onclick = () => {
    changes.deletedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
    orderid.value = cusid.value = empid.value = null;
};

document.getElementById('save').onclick = () => {
    dm.saveChanges(changes, 'OrderID');
    changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
    dm.executeQuery(new Query())
        .then((e: ReturnOption) => {
            table.tBodies[0].innerHTML = '';
            (<Object[]>e.result).forEach((data: Object) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};


