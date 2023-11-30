import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

class SerialNoAdaptor extends ODataV4Adaptor {
    
    public processResponse(): Object {
        let i: number = 0;
        //calling base class processResponse function
        let original: Object[] = super.processResponse.apply(this, arguments);
        //Adding serial number
        original.forEach((item: Object) => item['SNO'] = ++i);
        return original;
    }
}

let template: string = '<tr><td>${SNO}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

table.innerHTML = '<tr><th>SNO</th><th>Customer ID</th><th>Employee ID</th></tr>';

new DataManager({ url: SERVICE_URI, adaptor: new SerialNoAdaptor }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {

        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
        });
});