/*
 * jQuery-search for jQuery
 * 1.0.0, 23 April 2016
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
		
		this.on(settings.triggers, function() {
			var val = $(this).val();
			if (!settings.caseSensitive) {
				val = val.toLowerCase();
			}
			if (val.length >= settings.minLength) {
				$(settings.rowClass).each(function() {
					var row = $(this);
					var found = false;
					$(settings.fieldClass, row).each(function() {
						var content = $(this).html();
						if (!settings.caseSensitive) {
							content = content.toLowerCase();
						}
						if (content.indexOf(val) > -1) {
							found = true;
						}
					});
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