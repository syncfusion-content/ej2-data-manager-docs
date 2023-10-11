import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>'
let group: string = '<tr><td colspan=3>' +
'<table id="datatable" class="e-table"><tr><th>ID</th><th>Price</th><th>Quantity</th></tr>' +
'${for(detail of Order_Details)}<tr><td>${detail.ProductID}</td><td>${detail.UnitPrice}</td><td>${detail.Quantity}</td></tr>${/for}' +
'<table></td></tr>';

let compiledFunction: Function = compile(template);
let groupFn = compile(group);

const SERVICE_URI =  'https://services.odata.org/V4/Northwind/Northwind.svc/';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor })
    .executeQuery(new Query().from('Orders').take(3).hierarchy(
                    new Query()
                        .foreignKey("OrderID")
                        .from("Order_Details")
                        .sortBy("Quantity"),
                    function () {
                        // Selective loading of child elements
                        return [10248, 10249, 10250]
                    }
                ))
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
            table.appendChild(groupFn(data)[0]);
        });
    });





