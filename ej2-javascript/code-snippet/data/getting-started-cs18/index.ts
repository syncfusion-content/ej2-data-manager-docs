

import { DataManager, Query, ReturnOption, ODataAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${Employee.FirstName}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

table.innerHTML = '<tr><th>OrderID</th><th>CustomerID</th><th>Employee Name</th></tr>';

new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor })
    .executeQuery(new Query().expand('Employee').select(['OrderID', 'CustomerID', 'Employee.FirstName']).take(8))
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });


