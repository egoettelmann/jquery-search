(function($){
 
    $.fn.jsearch = function( options ) {
 
        var settings = $.extend({
            rowClass: '.jsearch-row',
			fieldClass: '.jsearch-field',
			minLength: 3,
			triggers: 'keyup',
        }, options );
		
		this.on(settings.triggers, function() {
			var val = $(this).val().toLowerCase();
			if (val.length >= settings.minLength) {
				$(settings.rowClass).each(function() {
					var row = $(this);
					var found = false;
					$(settings.fieldClass, row).each(function() {
						if ($(this).html().toLowerCase().indexOf(val) > -1) {
							found = true;
						}
					});
					if (!found) {
						row.hide();
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