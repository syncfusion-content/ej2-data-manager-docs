

import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${field} - ${key}</td><td></td><td></td></tr>${for(item of items)}<tr><td>${item.OrderID}</td><td>${item.CustomerID}</td><td>${item.EmployeeID}</td></tr>${/for}';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor })
    .executeQuery(new Query().group('CustomerID').take(8))
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });



