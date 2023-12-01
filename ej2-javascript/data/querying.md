---
layout: post
title: Querying in ##Platform_Name## Data control | Syncfusion
description: Learn here all about Querying in Syncfusion ##Platform_Name## Data control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Querying 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Querying in ##Platform_Name## Data control

In this section, you will see in detail about how to build query using [Query](../api/data/query/) class and consume the data source.

## Specifying resource name using `from`

The [from](../api/data/query/#from) method is used to specify the resource name or table name from where the data should be retrieved.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs16" %}
{% endif %}

## Projection using `select`

The [select](../api/data/query/#select) method is used to select particular fields or columns from the data source.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs17" %}
{% endif %}

## Eager loading navigation properties

You can use the [expand](../api/data/query/#expand) method to eagerly load navigation properties. The navigation properties values are accessed using appropriate field names separated by dot(.) sign.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs18" %}
{% endif %}

## Sorting

You can use the [sortBy](../api/data/query/#sortby) method to perform sort operation in the data source. Default sorting order is `ascending`. To change the sort order, either you can specify the second argument of [sortBy](../api/data/query/#sortby) as `descending` or use the [sortByDesc](../api/data/query/#sortbydesc) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs19" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs19/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs19" %}
{% endif %}

> Multi sorting can be performed by simply chaining the multiple `sortBy` methods.

## Filtering

You can use the [where](../api/data/query/#where) method to build filter criteria which allows you to get reduced view of records. The [where](../api/data/query/#where) method can also be chained to form multiple filter criteria.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs20" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs20/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs20" %}
{% endif %}

### Filter Operators

Filter operators are generally used to specify the filter type. The various filter operators supported by **DataManager** is listed below.

* greaterthan
* greaterthanorequal
* lessthan
* lessthanorequal
* equal
* notequal
* startswith
* endswith
* contains

> These filter operators are used for creating filter query using [where](../api/data/query/#where) method and [Predicate](../api/data/predicate/) class.

### Build complex filter criteria using `Predicate`

Sometimes chaining [where](../api/data/query/#where) method is not sufficient to create very complex filter criteria, in such cases we can use [Predicate](../api/data/predicate/) class to create composite filter criteria.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs21" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs21" %}
{% endif %}

## Searching

You can use the [search](../api/data/query/#search) method to create search criteria, it differs from the filter in the way that search criteria will applied to all fields in the data source whereas filter criteria will be applied to a particular field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs22" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs22" %}
{% endif %}

> You can search particular fields by passing the field name collection in the second argument of [search](../api/data/query/#search) method.

## Grouping

**DataManager** allow you to group records by category. The [group](../api/data/query/#group) method is used to add group query.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs23" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs23/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs23" %}
{% endif %}

> Multiple grouping can be done by simply chaining the [group](../api/data/query/#group) method.

## Paging

You can query paged data using [page](../api/data/query/#page) method. This allow you to query particular set of records based on the page size and index.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs24" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs24/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs24" %}
{% endif %}

## Aggregation

The [aggregate](../api/data/query/#aggregate) method allows you to get aggregated value for a field based on the type. The built-in aggregate types are,

* sum
* average
* min
* max
* count
* truecount
* falsecount

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs25" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs25" %}
{% endif %}

## Hierarchical query

You can use the [hierarchy](../api/data/query/#hierarchy) method to build nested query. The hierarchical queries are commonly required when you use foreign key binding.

The [foreignKey](../api/data/query/#foreignkey) method is used to specify the key field of the foreign table and the second argument of the [hierarchy](../api/data/query/#hierarchy) method accepts a selector function which selects the records from the foreign table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs26/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs26" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs26/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs26" %}
{% endif %}