

import { DataManager, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import {data} from './datasource.ts';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: Function = compile(template);

let result: Object[] = new DataManager(data).executeLocal(new Query().take(8));

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

result.forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
});



