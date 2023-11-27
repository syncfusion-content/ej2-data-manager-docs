

import { Grid } from '@syncfusion/ej2-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: new DataManager(data),
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, type: 'number' },
                { field: 'CustomerID', width: 120, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 90, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    ],
    height: 315,
    allowPaging: false
});

grid.appendTo('#Grid');



