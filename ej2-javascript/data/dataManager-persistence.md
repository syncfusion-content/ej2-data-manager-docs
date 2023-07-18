---
layout: post
title: State persistence in ##Platform_Name## Data control | Syncfusion
description: Learn here all about dataManager state persistence in Syncfusion ##Platform_Name## Data control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: State persistence
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in ##Platform_Name## Data control

State persistence refers to the DataManager’s state maintained in the browser’s [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.
This feature requires the `id` and `enablePersistence` properties to be set in the **DataManager** to persist DataManager’s query object in the local storage.

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  //Mandatory properties to use state persistence.
  enablePersistence: true,
  id: "DataManagerid",
})
  .executeQuery(new Query().take(8))
  .then((e) => {
    //e.result will contain the records
  });
```

## Preventing a query from persistence

The executed queries in **DataManager** like Sorting, Searching, Filtering, and Selection will persist across browser sessions. However, in some cases, you might want to exclude specific queries from being saved. To achieve this, you can use the `ignoreOnPersist` property.

By providing an array of string values, such as **onSortBy** or **onSearch**, you can prevent certain queries from persisting in the DataManager's state. This allows you to customize the persistence behavior according to your application's requirements.

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  enablePersistence: true,
  id: "DataManagerid",
  //sort and search query won't persist now.
  ignoreOnPersist: ["onSortBy", "onSearch"],
})
  .executeQuery(new Query().sortBy("Designation", "descending").take(8))
  .then((e) => {
    //e.result will contain the records
  });
```

## Retrieving or Updating Local Storage Value

The DataManager’s persisted query object is saved in the `window.localStorage` for reference. You can access or modify the localStorage value using the `getPersistedData` and `setPersistData` methods in the **DataManager**. These methods require the **id** argument to retrieve or update the query object in local storage.

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

let dataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  enablePersistence: true,
  id: "DataManagerid",
});

let query = new Query().sortBy("Designation", "descending").take(8);

//Arguments for `setPersistData`:
// * e: Event - The event parameter that triggers the `setPersistData` method (provide it with null value).
// * id: string - The identifier of the persisted query to set.
// * query: object - The query to be persisted.

dataManager.setPersistData(null, "DataManagerid", query);

//Arguments for `getPersistedData`:
// * id: string - The identifier of the persisted query to set.
//return the persisted query for that identifier.

let persistedQuery = dataManager.getPersistedData("Johndoe");
```

## Restore initial DataManager state

When the `enablePersistence` property is set to **true**, the **DataManager** will keep its state even if the page is reloaded. In some cases, you may be required to retain the **DataManager** in its initial state.

You can achieve this by `clearPersistence` and clearing the local storage data, as shown in the code below.

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

let dataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  enablePersistence: true,
  id: "DataManagerid",
});

let query = new Query().sortBy("Designation", "descending").take(8);

//sets persist query to browser storage.
dataManager.setPersistData(null, "DataManagerid", query);

//clears the persisted query.
dataManager.clearPersistence();
```

## Demo sample using DataManager state persistence

In this demo, we present a multi-user shopping site that showcases the DataManager's state persistence feature along with grid and chart components using DataManager as their datasource.

Demo Sample Usage Instructions:

1. You can select a user from the dropdown menu. The username has been automatically set as `id` property in the DataManager, allowing queries to be persisted separately for each user.

2. To add items to the wishlist for a specific user, simply select the desired items using the checkboxes and then click the **Add to Wishlist** button.

3. To view the added items, click the **Show Wishlist** button. The filter query will be automatically generated based on the selected items during the addition process, and it will be executed in the datamanager when the **Show Wishlist** button is clicked.

4. You can filter products by category using the filter bar. When you select a category, a filter query will be generated based on your selection. This query will be executed automatically when you close the filter menu. Similarly, you can sort the products by clicking the **Price-Low to High** or **Price-High to Low** buttons. The corresponding sort query will be executed in the **DataManager**, updating the grid and chart components accordingly. To prevent the sort query from persisting for each user, it is marked with the `ignoreOnPersist` property.

5. To switch to a different user, click the **Logout** button. This action will take you to the home page where you can select a new user from the dropdown menu. Your currently executed queries will be persisted, ensuring that the wishlist items for each user are retained.

6. To clear the wishlist for a specific user, click the **Clear Wishlist** button. This will remove all the saved wishlist items for that user.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs34/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs34/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "http://127.0.0.1:4000/ej2-ts/code-snippet/data/getting-started-cs34" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs34/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs34/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "http://127.0.0.1:4000/ej2-ts/code-snippet/data/getting-started-cs34" %}
{% endif %}
