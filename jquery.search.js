/*
 * jQuery-search for jQuery
 * 1.0.1, 23 December 2016
 *
 * Using the jQuery-search plugin, you can easily add a live search on your html pages
 *
 * Copyright 2016 @egoettelmann, https://github.com/egoettelmann/
 * Released under the MIT License
 */(function($){
 
    $.fn.jsearch = function( options ) {
 
        var settings = $.extend({
            rowClass: '.jsearch-row',
			fieldClass: '.jsearch-field',
			minLength: 3,
			triggers: 'keyup',
			caseSensitive: false,
        }, options );
        
        var containsText = function(str, el, cs) {        	
			var content = el.text();
			if (!cs) {
				content = content.toLowerCase();
			}
			if (content.indexOf(str) > -1) {
				return true;
			}
			return false;
        };
		
		this.on(settings.triggers, function() {
			var val = $(this).val();
			if (!settings.caseSensitive) {
				val = val.toLowerCase();
			}
			if (val.length >= settings.minLength) {
				$(settings.rowClass).each(function() {
					var row = $(this);
					var found = false;
					if (settings.rowClass !== settings.fieldClass) {
						$(settings.fieldClass, row).each(function() {
							found = containsText(val, $(this), settings.caseSensitive);
							return !found;
						});
					} else {
						found = containsText(val, row, settings.caseSensitive);
					}
					if (!found) {
						row.hide();
					} else {
						row.show();
					}
				});
			} else if (val.length == 0) {
				$(settings.rowClass).each(function() {
					var row = $(this);
					row.show();
				});
			}
		});
		
		return this;
    };
 
}(jQuery));