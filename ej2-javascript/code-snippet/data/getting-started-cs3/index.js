
var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>'
var group = '<tr><td colspan=3>' +
'<table id="datatable" class="e-table"><tr><th>ID</th><th>Price</th><th>Quantity</th></tr>' +
'${for(detail of Order_Details)}<tr><td>${detail.ProductID}</td><td>${detail.UnitPrice}</td><td>${detail.Quantity}</td></tr>${/for}' +
'<table></td></tr>';
var compiledFunction = ej.base.compile(template);
var groupFn = ej.base.compile(group);

const SERVICE_URI =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

var table = (document.getElementById('datatable'));

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(new ej.data.Query().from('Orders').take(3).hierarchy(
                    new ej.data.Query()
                        .foreignKey("OrderID")
                        .from("Order_Details")
                        .sortBy("Quantity"),
                    function () {
                        // Selective loading of child elements
                        return [10248, 10249, 10250]
                    }
                ))
    .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
            table.appendChild(groupFn(data)[0]);
        });
    });