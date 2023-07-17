---
layout: post
title: State persistence in EJ2 TypeScript Data control | Syncfusion
description: Learn here all about dataManager state persistence in Syncfusion EJ2 TypeScript Data control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: State persistence
publishingplatform: EJ2 TypeScript
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in EJ2 TypeScript Data control

State persistence refers to the DataManager’s state maintained in the browser’s localStorage even if the browser is refreshed or if you move to the next page within the browser. State persistence stores DataManager’s query object in the local storage when the enablePersistence is defined as true. This feature requires the "id" and "enablePersistence" properties to be set in the DataManager.

## Prevent queries from persisting

When the enablePersistence property is set to true, the queries executed in **DataManager** such as Sorting, Searching, Filtering, Selection will persist. To prevent specific queries from persisting, you can use the "ignoreOnPersist" property. By providing an array of string values, such as "onSelect" or "onWhere", you can exclude certain queries from being saved.

## Get or set local storage value

If the enablePersistence property is set to true, the DataManager’s query object is saved in the window.localStorage for reference. You can access or modify the localStorage value using the "getPersistedData" and "setPersistData" methods in the  **DataManager**. These methods require the "id" argument to retrieve or update the query object.

## Clear persisted queries

To clear persisted queries, you can use the "clearPersistence" method in the DataManager, which removes the stored queries from the localStorage.

## Multi-user shopping site using state persistence

In this section, you will see a multi user shopping site which demonstrates **DataManager** State persistence feature in detail. 

You can select a user from the dropdown menu. Each user is assigned a unique username as the "id" property in the DataManager, allowing queries to be persisted separately for each user.

To add items to the wishlist for a specific user, select the desired items using the checkboxes and click the "Add to Wishlist" button. You can view the added items by clicking the "Show Wishlist" button. filter query will be generated based on the selected items while adding to wishlist and gets executed in datamanager when show wishlist button is clicked.

Filtering the products by category can be done using the filter bar. The filter query will be generated based on the selected category and executed when the filter menu is closed. Similarly, you can perform sorting by clicking the "Price-Low to High" or "Price-High to Low" buttons. The corresponding sort query will be executed in the DataManager, and the grid and chart components will be updated accordingly.Here the sort query is provided as value for ignoreOnPersist property to prevent it from persisting for each user.

To switch to a different user, click the "Logout" button. The home page with the user select dropdown will appear, allowing you to select a different user. The currently executed queries will be persisted, ensuring that the wishlist items for each user are retained.

To clear the wishlist for a particular user, use the "Clear Wishlist" button. This action will remove the persisted wishlist items for that user.

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
