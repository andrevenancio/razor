/**
 * @preserve Razor Javascript Framework (Beta).
 * author: Razorfish London.
 */

/**
 * Razor Javascript Framework.
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * Base namespace for Razor.
 * @const
 */
var Razor = Razor || {
  version: 'beta',
  FPS: true,
  logging: true
};

/**
 * Binding functionality for older browsers.
 * source: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind
 */
Razor.addBindSupport = function() {
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var aArgs = Array.prototype.slice.call(arguments, 1);
      var fToBind = this;
      var fNOP = function() {};
      var fBound = function() {
        return fToBind.apply(this instanceof fNOP && oThis
          ? this
          : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();

      return fBound;
    };
  }
};

/**
 * Inherit the prototype methods from one constructor into another.
 * @param  {Function} child  Child class.
 * @param  {Function} parent Parent class.
 */
Razor.inherits = function(child, parent) {
  var tempParent = function() {};
  tempParent.prototype = parent.prototype;
  child.superClass = parent.prototype;
  child.prototype = new tempParent();
  child.prototype.constructor = child;
};
