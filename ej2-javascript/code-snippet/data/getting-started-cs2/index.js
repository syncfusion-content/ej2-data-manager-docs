
var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>'

var compiledFunction = ej.base.compile(template);

const SERVICE_URI =  'https://services.syncfusion.com/js/production/api/Orders';

var table = (document.getElementById('datatable'));

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataAdaptor })
    .executeQuery(new ej.data.Query().take(8))
    .then((e) => {
        (e.result.items).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });