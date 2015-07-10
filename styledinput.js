/*
 * STYLED INPUT
 * Make inputs stylable: checkbox, radiobutton, filepicker, select
 * Author: Szymon Piwowarczyk (piwowarczyk.net)
 *
 * Use script on inputs:
 * $("select").styledInput({ // all select inputs on the webpage
 *   wrapperClass : 'myselect', // additional class
 *   wrapperId : 'myid', // additional id; for more elements - autoincremental
 *   before : true, // adds "before" container
 *   after : true // adds "after" container
 * });
 *
 * We will get:
 * <div class="styledInput myselect" id="myid">
 *   <select>
 *     <option>Value 1</option>
 *     <option>Value 2</option>
 *     <option>Value 3</option>
 *   </select>
 *   <span>Value 1</span>
 * </div>
 */
(function($) {
  $.fn.styledInput = function(options, callback) {
    options = $.extend({
      wrapperClass : false,
      wrapperId : false,
      before : false,
      after : false
    }, options);
    var that = this;
    var counter = $(this).length;
    var counter_i = 0;
    $(this).each(function() {
      if($(this).is('input, select, textarea')) {
        var input = $(this);
        input.wrap('<div></div>');
        var wrapper = input.parent();
        wrapper.addClass('styledInput');
        if(options.wrapperClass) {
          wrapper.addClass(options.wrapperClass);
        }
        if(options.wrapperId) {
          wrapper.attr('id', options.wrapperId);
        }
        input.after('<span></span>');
        var value = input.next('span');
        value.html(input.val());
        if(input.is('select')) {
          value.html(input.find("option:selected").text());
        }
        if(input.is('[type=checkbox], [type=radio]')) {
          if(input.prop('checked')) {
            wrapper.addClass('checked');
          } else {
            wrapper.removeClass('checked');
          }
        }
        input.change(function() {
          value.html(input.val());
          if(input.is('select')) {
            value.html(input.find("option:selected").text());
          }
          if(input.is('[type=checkbox]')) {
            if(input.prop('checked')) {
              wrapper.addClass('checked');
            } else {
              wrapper.removeClass('checked');
            }
          }
          if(input.is('[type=radio]')) {
            $('[type=radio][name="'+input.attr('name')+'"]').each(function() {
              if($(this).prop('checked')) {
                $(this).parent().addClass('checked');
              } else {
                $(this).parent().removeClass('checked');
              }
            });
          }
        });
        if(options.before) {
          wrapper.prepend('<div class="before"></div>');
        }
        if(options.after) {
          wrapper.append('<div class="after"></div>');
        }
      }
      counter_i++;
    });
    if(callback) {
      callback();
    }
    return that;
  };
})(jQuery);