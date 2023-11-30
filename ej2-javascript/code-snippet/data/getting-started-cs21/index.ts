

import { DataManager, Query, ODataV4Adaptor, Predicate, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

//Building complex filter criteria using `Predicate`
let predicate: Predicate = new Predicate('EmployeeID', 'equal', 3);
predicate = predicate.or('EmployeeID', 'equal', 2);

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor })
    .executeQuery(new Query().where(predicate).take(8))
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });



