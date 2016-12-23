# jQuery-search

A very simple and lightweight live search jQuery plugin: make your pages dynamic with two simple CSS classes.

To use this plugin, include it within your html page
```html
<script src="jquery.search.min.js"></script>
```
and initialize it on an input
```
<script>
$('input[type="text"').jsearch();
</script>
```
All elements annotated with a `.jsearch-row` class will be filtered out if they do not include a `.jsearch-field` element that matches the search.

The `.jsearch-field` is not necessarily a text node. If it contains nested elements, the search will be performed in any of its children (see [jQuery.text](http://api.jquery.com/text/)).

## Options

You can initialize the plugin with various options, e.g. if you need to customize the two css classes you can do as below:
```js
<script>
$('input[type="text"').jsearch({
	rowClass: '.my-custom-row-class',
	fieldClass: '.my-custom-field-class'
});
</script>
```

The list of available options and their default values is shown in the following table.

| Name          | Description                                                               | Default            |
| ------------- |---------------------------------------------------------------------------| -------------------|
| rowClass      | the jQuery selector that is used to show/hide rows                        | `'.jsearch-row'`   |
| fieldClass    | the jQuery selector that is used to identify the searchable elements      | `'.jsearch-field'` |
| minLength     | the minimal length of the string to start the search                      | `3`                |
| triggers      | the events that trigger the search                                        | `'keyup'`          |
| caseSensitive | if the search has to be case sensitive or not                             | `false`            |

If the `rowClass` attribute is equal to the `fieldClass` attribute, the search is performed in the same element that is shown/hidden.

**Note**: the `rowClass` and `fieldClass` attributes can be any css selectors.