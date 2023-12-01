

import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=10';

let grid: Grid = new Grid({
    dataSource: new DataManager({ url: SERVICE_URI,  adaptor: new ODataV4Adaptor(), }),
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, type: 'number' },
                { field: 'CustomerID', width: 120, headerText: 'Customer ID', type: 'string' },
                { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 }
    ],
    height: 315
});

grid.appendTo('#Grid');



