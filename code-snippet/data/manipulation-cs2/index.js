var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

var table = (document.getElementById('datatable'));
var dm = new ej.data.DataManager(data.slice(0, 4));

dm.executeQuery(new ej.data.Query())
    .then((e) => {
        (e.result).forEach((data) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });

var button = document.getElementById('manipulate');
var orderid = document.getElementById('OrderID');
var cusid = document.getElementById('CustomerID');
var empid =document.getElementById('EmployeeID');

button.onclick = () => {
    var data = {
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    };
    if (!data.OrderID) { return; }
    dm.update('OrderID', data);
    dm.executeQuery(new ej.data.Query())
        .then((e) => {
            table.tBodies[0].innerHTML = '';
            (e.result).forEach((data) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};

