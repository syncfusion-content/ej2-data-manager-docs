---
layout: post
title: How to in ##Platform_Name## Data control | Syncfusion
description: Learn here all about How to in Syncfusion ##Platform_Name## Data control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: How to 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to in ##Platform_Name## Data control

## Work in offline mode

On remote data binding, every time invoking [executeQuery](../api/data/dataManager/#executequery) will send request to the server and the query will be processed on server-side. To avoid post back to server on calling [executeQuery](../api/data/dataManager/#executequery), you can set the **DataManager** to load all the data on initialization time and make the query processing in client-side. To enable this behavior, you can use `offline` property of **DataManager**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs7" %}
{% endif %}

> The loaded data will be cached in the `json` property of **DataManager**.

## Sending additional parameters to server

You can use the [addParams](../api/data/query/#addparams) method of [Query](../api/data/query) class, to add custom parameter to the data request.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/data/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/data/getting-started-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/data/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/data/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/getting-started-cs8" %}
{% endif %}

## Adding custom headers

You can add custom headers to the request made by **DataManager** using the `headers` property.

```ts
import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';

const SERVICE_URI: string =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor, headers:[{ 'syncfusion': 'true' }] })
    .executeQuery(new Query())
    .then((e: ReturnOption) => {
        //get result from e.result
    });

```

> Adding custom headers while making cross domain request will initiate preflight request.