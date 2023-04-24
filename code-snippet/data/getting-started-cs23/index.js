var template = '<tr><td>${field} - ${key}</td><td></td><td></td></tr>${for(item of items)}<tr><td>${item.OrderID}</td><td>${item.CustomerID}</td><td>${item.EmployeeID}</td></tr>${/for}';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

var table = (document.getElementById('datatable'));

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(new ej.data.Query().group('CustomerID').take(8))
    .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });

