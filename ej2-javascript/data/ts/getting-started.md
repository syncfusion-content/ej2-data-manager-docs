---
layout: post
title: Getting started with ##Platform_Name## Data control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Data control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Data control

## Dependencies

Below is the list of minimum dependencies required to use the DataManager.

```javascript
|-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-base
    |-- es6-promise (Required when window.Promise is not available)
```

> `@syncfusion/ej2-data` requires the presence of a Promise feature in global environment. In the browser, window.Promise must be available.

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}


## Connection to a data source

The DataManager can act as gateway for both local and remote data source which will uses the query to interact with the data source.

### Binding to JSON data

`DataManager` can be bound to local data source by assigning the array of JavaScript objects to the `json` property or simply passing them to the constructor while instantiating.

Add the CSS below to the `index.html` file to style the table and create `app/datasource.ts` file to bind JSON data.

```html
<style>
     .e-table {
          border: solid 1px #e0e0e0;
          border-collapse: collapse;
          font-family: Roboto;
     }

     .e-table td,
     .e-table th {
          border-style: solid;
          border-width: 1px 0 0;
          border-color: #e0e0e0;
          display: table-cell;
          font-size: 14px;
          line-height: 20px;
          overflow: hidden;
          padding: 8px 21px;
          vertical-align: middle;
          white-space: nowrap;
          width: auto;
     }
</style>
``` 

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% raw %}
import { DataManager, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import {data} from './datasource';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: Function = compile(template);

let result: Object[] = new DataManager(data).executeLocal(new Query().take(8));

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

result.forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
});
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs27/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs27/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs27" %}

### Binding to OData

`DataManager` can be bound to remote data source by assigning service end point URL to the `url` property. Now all `DataManager` operations will address the provided service end point.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/data/getting-started-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs28" %}

## Filter

The data filtering is a trivial operation which will let us to get reduced view of data based on filter criteria. The filter expression can be built easily using `where` method of `Query` class.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% raw %}
import { DataManager, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import {data} from './datasource';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: Function = compile(template);

let result: Object[] = new DataManager(data).executeLocal(new Query().where('EmployeeID', 'equal', 3));

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

result.forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
});
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs29/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs29/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs29" %}

## Sort

The data can be ordered either in ascending or descending using `sortBy` method of `Query` class.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% raw %}
import { DataManager, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import {data} from './datasource';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: Function = compile(template);

let result: Object[] = new DataManager(data).executeLocal(new Query().sortBy('CustomerID').take(8));

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

result.forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
});
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs30/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs30/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs30" %}

## Page

The `page` method of the Query class is used to get range of data based on the page number and the total page size.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { DataManager, Query } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import {data} from './datasource';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: Function = compile(template);

let result: Object[] = new DataManager(data).executeLocal(new Query().page(1, 8));

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

result.forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
});
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs31/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs31/datasource.ts%}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs31" %}

## Component binding

DataManager component can be used with Syncfusion components which supports data binding.

In the following samples, the grid component is bound. To render the grid with the necessary configurations, please refer to the [Grid Getting Started](https://ej2.syncfusion.com/documentation/grid/getting-started) documentation.

### Local data binding

A DataSource can be created in-line with other Syncfusion component configuration settings.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { data } from './datasource';

let grid: Grid = new Grid({
    dataSource: new DataManager(data),
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90, type: 'number' },
                { field: 'CustomerID', width: 120, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 90, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    ],
    height: 315,
    allowPaging: false
});

grid.appendTo('#Grid');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs32/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/data/getting-started-cs32/datasource.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs32" %}

### Remote data binding

To bind remote data to Syncfusion component, you can assign a service data as an instance of `DataManager` to the `dataSource` property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs33/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs33" %}