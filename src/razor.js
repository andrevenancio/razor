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

/**
 * Returns global bounding box with x, y, width, height coordinates.
 * @param  {dom} element Any dom element.
 * @return {Object}         Bounding Box coordinates.
 */
Razor.getBoundingBox = function(element) {
  var elem = element;
  var tagname = '';
  var x = 0;
  var y = 0;

  while ((typeof(elem) == 'object') && (typeof(elem.tagName) != 'undefined')) {
    y += elem.offsetTop;
    x += elem.offsetLeft;
    tagname = elem.tagName.toUpperCase();

    if (tagname == 'BODY') {
      elem = 0;
    }
    if (typeof(elem) == 'object') {
      if (typeof(elem.offsetParent) == 'object') {
        elem = elem.offsetParent;
      }
    }
  }
  return {x: x, y: y};
};
