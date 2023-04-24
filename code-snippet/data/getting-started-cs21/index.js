var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

let table = (document.getElementById('datatable'));

//Building complex filter criteria using `Predicate`
var predicate = new ej.data.Predicate('EmployeeID', 'equal', 3);
predicate = predicate.or('EmployeeID', 'equal', 2);

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(new ej.data.Query().where(predicate).take(8))
    .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });

