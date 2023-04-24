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
button.value = 'Remove';
var orderid = document.getElementById('OrderID');
document.getElementById('CustomerID').style.display = 'none';
document.getElementById('EmployeeID').style.display = 'none';


button.onclick = () => {
    if (!orderid.value) { return; }
    dm.remove('OrderID', { OrderID: +orderid.value });
    dm.executeQuery(new ej.data.Query())
        .then((e) => {
            table.tBodies[0].innerHTML = '';
            (e.result).forEach((data) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};

