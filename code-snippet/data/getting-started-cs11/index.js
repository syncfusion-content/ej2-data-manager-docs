var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
var compiledFunction = ej.base.compile(template);

var result = new ej.data.DataManager(data).executeLocal(new ej.data.Query().where('EmployeeID', 'equal', 3));

var table = (document.getElementById('datatable'));

result.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
});

