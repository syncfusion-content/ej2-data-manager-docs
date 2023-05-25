var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

var table = (document.getElementById('datatable'));

new ej.data.DataManager(data)
    .executeQuery(new ej.data.Query().search('VI', ['CustomerID']))
    .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });

