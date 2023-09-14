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

State persistence refers to the ability of the DataManager to maintain its state in the browser's localStorage, even when the browser is refreshed or when navigating to a different page within the same browser. To enable this feature, you need to set the `id` and `enablePersistence` properties in the DataManager. This allows the DataManager's query object to persistently store in the local storage.

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  //Mandatory properties to use state persistence.
  enablePersistence: true,
  id: "johnDoe",
})
  .executeQuery(new Query().take(8))
  .then((e) => {
    //e.result will contain the records
  });
```

## Preventing a query from persistence

By default, the DataManager can persist various types of queries, such as sorting, searching, filtering, and selection queries. However, there may be cases where you want to exclude specific queries from persistence. To achieve this, you can utilize the `ignoreOnPersist` property and specify the queries you wish to exclude. Refer to the table below for the naming conventions of DataManager queries:

Sorting: onSortBy
Searching: onSearch
Selection: onSelect
Filtering: onWhere
Grouping: onGroup

The `ignoreOnPersist` property type is an array, allowing you to exclude multiple queries from persistence according to your requirements.
Refer to the following example, which demonstrates how to exclude the sorting query ("onSortBy") and the search query ("onSearch") from being persisted in the DataManager:

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

## How to get or set the existing persisted data

To access or modify the existing persisted data in the DataManager, you can utilize the `getPersistedData` and `setPersistData` methods available in the DataManager.

The `getPersistedData` method allows you to retrieve the existing persisted data. It takes a single argument, which is the DataManager's `id`. By passing the DataManager's id, you can retrieve the persisted data associated with the DataManager from the window.localStorage. Here is an example of how to use the getPersistedData method:

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

let dataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  enablePersistence: true,
  id: "Johndoe",
});

let persistedQuery = dataManager.getPersistedData("Johndoe");
```
On the other hand, the `setPersistData` method enables you to add a query to the existing persisted data. It accepts three arguments:

Original event: Set this argument to null.
Id: Pass the DataManager's id value.
Query: Provide the query that you want to add to the persisted data.

Here is an example demonstrating how to add a query to the existing persisted data:

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

let dataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  enablePersistence: true,
  id: "Johndoe",
});

let query = new Query().sortBy("Designation", "descending").take(8);

dataManager.setPersistData(null, "Johndoe", query);

```
By using the setPersistData method, you can append the specified query to the DataManager's existing persisted data.

## Restoring the initial state of Datamanager

If you have enabled the `enablePersistence` feature in the DataManager, it automatically retains the previous state when the browser is refreshed or reloaded. However, there might be situations where you want to clear the persistence and load the initial state of the DataManager. In such cases, you can utilize the `clearPersistence()` method provided by the DataManager.

Here is a code example demonstrating how to clear the persistence in the DataManager:

```ts
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";

let SERVICE_URI =
  "https://services.syncfusion.com/js/production/api/UrlDataSource";

let dataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  enablePersistence: true,
  id: "dataManagerid",
});

let query = new Query().sortBy("Designation", "descending").take(8);

//sets persist query to browser storage.
dataManager.setPersistData(null, "Johndoe", query);

//clears the persisted query.
dataManager.clearPersistence();
```
By invoking the clearPersistence() method, you can remove the persisted data and restore the DataManager to its initial state.

## Use case example demonstrating state persistence with the DataManager

This demonstration involves two controls, namely the **Grid** control and the **Chart** control, which both fetch data from the same instance of the DataManager, which has the state persistence feature enabled.

The Grid control is responsible for displaying the entire dataset, while the Chart control presents user reviews based on specific data from the "column name" field. Both controls are associated with the same DataManager instance and it has enabled the state persistence feature. The query state of the DataManager is automatically saved in the browser's local storage as the user applies filtering and sorting actions. In both controls are reloaded the data with the last persisted state while refreshing or reloading the browser.

In this demo, the filter query and sort query are persisted, whereas the search query is not persisted. The onSearch query is excluded from persistence by setting it in the ignoreOnPersist property of the DataManager.

For a more detailed explanation and steps of this use case, refer to the following:

Step 1: To initiate the demo, users are required to select a username from the dropdown list. After making a selection, the Grid and Chart controls will load with initial data using the Datamanager. Specifically for this demo, the Datamanager's id will be set to the chosen username. The Datamanager will then store the query with this id in the window.localStorage. Refer to the code example for your reference:

Step 2: This demo allows you to select Grid items by clicking checkboxes and adding them to your cart using the "Add" button in the toolbar. Additionally, you can sort the products from high price to low price by clicking the "Price Low-High" and "Price High-Low" buttons. Furthermore, you can view the added products from the wishlist by clicking the wishlist icon. All this information is persisted and stored by the DataManager based on the user ID.

You also can filter the product items using the product category filter. However, this category filter is also not persisted.

The Chart control allows you to see the product reviews.

Step 3: To log out, simply use the "Logout" button.

Step 4: After logging out or refreshing the browser, you will need to select a username from the dropdown list once again (repeat step 1). However, the Grid data will now be loaded based on the last persisted wishlist, associated with the chosen username. The complete example is as follows:

To clear the wishlist for a specific user, click the "Clear Wishlist" button. This will remove all the saved wishlist items for that user.

[Here](https://github.com/SyncfusionExamples/EJ2-DataManager-peristence-cart-sample), you can find the Use case example demonstrating sate persistence with the DataManager.
