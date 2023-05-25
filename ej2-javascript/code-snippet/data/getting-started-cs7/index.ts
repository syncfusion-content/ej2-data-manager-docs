

import { DataManager, ReturnOption, ODataAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string =  'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/?$top=7';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

let dm: DataManager = new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor, offline: true });

dm.ready.then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
        });
  });



