

import { Grid } from '@syncfusion/ej2-grids';
import { DataManager } from '@syncfusion/ej2-data';

const SERVICE_URI: string = 'https://services.syncfusion.com/js/production/api/Orders';

let grid: Grid = new Grid({
    dataSource: new DataManager({ url: SERVICE_URI }),
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, type: 'number' },
                { field: 'CustomerID', width: 120, headerText: 'Customer ID', type: 'string' },
                { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 }
    ],
    height: 315
});

grid.appendTo('#Grid');



