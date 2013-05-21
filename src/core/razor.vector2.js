/**
 * 2D Vector
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * 2D Vector
 * @param  {Number} x Position x.
 * @param  {Number} y Position y.
 * @return {Number}   [description].
 */
Razor.Vector2 = function(x, y) {
  var vector = new Float32Array(2);
  Razor.Vector2.set(vector, x || 0, y || 0);
  return vector;
};

/**
 * Sets the x coordinate of the Vector
 * @param  {Float32Array} target Target Vector.
 * @param  {Number} x Position x.
 * @return {Float32Array} target Target Vector.
 */
Razor.Vector2.setX = function(target, x) {
  target[0] = x;
  return this;
};

/**
 * Sets the y coordinate of the Vector
 * @param  {Float32Array} target Target Vector.
 * @param  {Number} y Position y.
 * @return {Float32Array} target Target Vector.
 */
Razor.Vector2.setY = function(target, x) {
  target[1] = y;
  return this;
};

/**
 * Sets the 2D Vector
 * @param  {Float32Array} target Target Vector.
 * @param  {Number} x Position x.
 * @param  {Number} y Position y.
 * @return {Float32Array} target Target Vector.
 */
Razor.Vector2.set = function(target, x, y) {
  Razor.Vector2.setX(target, x);
  Razor.Vector2.setY(target, y);
  return this;
};
