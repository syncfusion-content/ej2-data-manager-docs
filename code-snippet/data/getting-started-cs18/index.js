var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${Employee.FirstName}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

var table = (document.getElementById('datatable'));

table.innerHTML = '<tr><th>OrderID</th><th>CustomerID</th><th>Employee Name</th></tr>';

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataAdaptor })
    .executeQuery(new ej.data.Query().expand('Employee').select(['OrderID', 'CustomerID', 'Employee.FirstName']).take(8))
    .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });

