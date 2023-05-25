---
layout: post
title: Data binding in ##Platform_Name## Data control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Data control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Data control

**DataManager** supports both RESTful JSON data services binding and local JavaScript object array binding.

## Local data binding

**DataManager** can be bound to local data source by assigning the array of JavaScript objects to the `json` property or simply passing them
to the constructor while instantiating. Now the JavaScript object array can be queried and manipulated.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs5" %}
{% endif %}

## Remote data binding

**DataManager** can be bound to remote data source by assigning service end point URL to the `url` property. With the provided `url`, the **DataManager** handles all communication with the data server with help of queries.

When querying data, the **DataManager** will convert the query object(**Query**) into server request after calling [`executeQuery`](../api/data/dataManager/#executequery) and waits for the server response(`JSON` format).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs6" %}
{% endif %}

> The queried data will not be cached locally unless offline mode is enabled.

## See Also

* [Binding with OData service](./adaptors/#odata-adaptor)
* [Binding with ODataV4 service](./adaptors/#odatav4-adaptor)
* [Binding with Web API](./adaptors/#web-api-adaptor)
* [How to write custom adaptor](./adaptors/#writing-custom-adaptor)
* [How to work in offline mode](./how-to/#work-in-offline-mode)
* [How to send additional parameters](./how-to/#sending-additional-parameters-to-server)
* [How to add custom request headers](./how-to/#adding-custom-headers)
