---
layout: post
title: Manipulation in ##Platform_Name## Data control | Syncfusion
description: Learn here all about Manipulation in Syncfusion ##Platform_Name## Data control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Manipulation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Manipulation in ##Platform_Name## Data control

In this section, you will see in detail about how to manipulate data using **DataManager**. The **DataManager** can create, update and delete records either in local data source or remote data source.

Each data sources uses different way in handling the CRUD operations and hence **DataManager** uses data adaptors to manipulate data that can be understood by a particular data source.

## Insert

The [`insert`](../api/data/dataManager/#insert) method of **DataManager** is used to add new record to the data source. For remote data source, the new record will be send along with the request to the server.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/manipulation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/manipulation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/manipulation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-cs1" %}
{% endif %}

> In remote data sources, when the primary key field is an identity field, then it is advised to return the created data in the response.

## Update

The [`update`](../api/data/dataManager/#update) method of **DataManager** is used to modify/update a record in the data source. For remote data source, the modified record will be send along with the request to the server.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/manipulation-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/manipulation-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/manipulation-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-cs2" %}
{% endif %}

> Primary key name is required by the [`update`](../api/data/dataManager/#update) method to find the record to be updated.

## Remove

The [`remove`](../api/data/dataManager/#remove) method of **DataManager** is used to remove a record from the data source. For remote data source, the record details such as primary key and data will be send along with the request to the server.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/manipulation-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/manipulation-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/manipulation-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/manipulation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/manipulation-cs3" %}
{% endif %}

> Primary key name and its value are required to find the record to be removed.

## Batch Edit Operation

**DataManager** supports batch processing for the CRUD operations. You can use the [`saveChanges`](../api/data/dataManager/#savechanges) method to batch the edit operation. For remote data source, requests to add, remove and change are handled altogether at a time rather than passing the request separately for each operation.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/batchedit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/batchedit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/batchedit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/batchedit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/batchedit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/batchedit-cs1" %}
{% endif %}