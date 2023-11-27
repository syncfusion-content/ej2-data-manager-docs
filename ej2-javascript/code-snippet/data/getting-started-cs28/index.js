var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>'

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.syncfusion.com/js/production/api/Orders';

var table = (document.getElementById('datatable'));

new ej.data.DataManager({ url: SERVICE_URI }).executeQuery(new ej.data.Query()).then((e) => {

        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
});

