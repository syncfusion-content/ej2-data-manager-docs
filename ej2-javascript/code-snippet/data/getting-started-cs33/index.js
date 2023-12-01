const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=10';

var grid = new ej.grids.Grid({
    dataSource: new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor(), }),
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, type: 'number' },
                { field: 'CustomerID', width: 120, headerText: 'Customer ID', type: 'string' },
                { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 90 }
    ],
    height: 315
});

grid.appendTo('#Grid');

