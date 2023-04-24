var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

var table = (document.getElementById('datatable'));
var dm = new ej.data.DataManager({ json: (data).slice(0, 4) });

dm.executeQuery(new ej.data.Query())
    .then((e) => {
        (e.result).forEach((data) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
var changes = {
    changedRecords: [], addedRecords: [], deletedRecords: []
};
var orderid = document.getElementById('OrderID');
var cusid = document.getElementById('CustomerID');
var empid = document.getElementById('EmployeeID');

document.getElementById('added').onclick = () => {
    changes.addedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
    orderid.value = cusid.value = empid.value = null;
};
document.getElementById('changed').onclick = () => {
    changes.changedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
    orderid.value = cusid.value = empid.value = null;
};
document.getElementById('deleted').onclick = () => {
    changes.deletedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
    orderid.value = cusid.value = empid.value = null;
};

document.getElementById('save').onclick = () => {
    dm.saveChanges(changes, 'OrderID');
    changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
    dm.executeQuery(new ej.data.Query())
        .then((e) => {
            table.tBodies[0].innerHTML = '';
            (e.result).forEach((data) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};

