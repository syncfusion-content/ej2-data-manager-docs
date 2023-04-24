

import { DataManager, Query, ReturnOption, ODataAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

class SerialNoAdaptor extends ODataAdaptor {
    public processResponse(): Object {
        let i: number = 0;
        //calling base class processResponse function
        let original: Object[] = super.processResponse.apply(this, arguments);
        //Adding serial number
        original.forEach((item: Object) => item['Sno'] = ++i);
        return original;
    }
}

let template: string = '<tr><td>${Sno}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string =  'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

table.innerHTML = '<tr><th>SNO</th><th>Customer ID</th><th>Employee ID</th></tr>';

new DataManager({ url: SERVICE_URI, adaptor: new SerialNoAdaptor }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {

        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
        });
});




