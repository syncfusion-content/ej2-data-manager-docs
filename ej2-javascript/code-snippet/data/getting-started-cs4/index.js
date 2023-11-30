var template = '<tr><td>${Sno}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
 
var compiledFunction = ej.base.compile(template);
 
class SerialNoAdaptor extends ej.data.ODataV4Adaptor {
    processResponse() {
        let i = 0;
        // calling the base class processResponse function
        let original = super.processResponse.apply(this, arguments);
        // Adding serial number
        original.forEach((item) => item['Sno'] = ++i);
        return original;
    }
}
 
const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
 
var table = document.getElementById('datatable');
 
new ej.data.DataManager({ url: SERVICE_URI, adaptor: new SerialNoAdaptor() })
    .executeQuery(new ej.data.Query().take(8))
    .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });