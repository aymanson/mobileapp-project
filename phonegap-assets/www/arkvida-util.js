/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  this.Class = function(){};
  
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})();

/**
 * Copyright (c) 2010 Conrad Irwin <conrad@rapportive.com> MIT license.
 * Based loosely on original: Copyright (c) 2008 mkmanning MIT license.
 *
 * Parses CGI query strings into javascript objects.
 *
 * See the README for details.
 **/
(function ($) {
    $.parseQuery = function (options) {

        var config = {query: window.location.search || ""},
            params = {};

        if (typeof options === 'string') {
            options = {query: options};
        }
        $.extend(config, $.parseQuery, options);
        config.query = config.query.replace(/^\?/, '');

        $.each(config.query.split(config.separator), function (i, param) {
            var pair = param.split('='),
                key = config.decode(pair.shift(), null).toString(),
                value = config.decode(pair.length ? pair.join('=') : null, key);

            if (config.array_keys(key)) {
                params[key] = params[key] || [];
                params[key].push(value);
            } else {
                params[key] = value;
            }
        });
        return params;
    };
    $.parseQuery.decode = $.parseQuery.default_decode = function (string) {
        return decodeURIComponent((string || "").replace('+', ' '));
    };
    $.parseQuery.array_keys = function () {
        return false;
    };
    $.parseQuery.separator = "&";
}(jQuery));


$(document).bind("mobileinit", function(){
	  $.mobile.buttonMarkup.hoverDelay = 60;
});