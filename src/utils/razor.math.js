/**
 * Math Utils
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * @constructor
 */
Razor.Math = function() {
};

/**
 * Returns angle in radiants between two points.
 * @param  {Number} p1x First point x coordinate.
 * @param  {Number} p1y First point y coordinate.
 * @param  {Number} p2x Second point x coordinate.
 * @param  {Number} p2y Second point y coordinate.
 * @return {Number}        angle in radians.
 */
Razor.Math.getAngleBetweenPointsRadiants = function(p1x, p1y, p2x, p2y) {
  var x = p1x - p2x;
  var y = p1y - p2y;
  var radians = Math.atan2(y, x);
  return radians;
};

/**
 * Returns angle in degrees between two points.
 * @param  {Number} p1x First point x coordinate.
 * @param  {Number} p1y First point y coordinate.
 * @param  {Number} p2x Second point x coordinate.
 * @param  {Number} p2y Second point y coordinate.
 * @return {Number}        angle in degrees.
 */
Razor.Math.getAngleBetweenPointsDegrees = function(p1x, p1y, p2x, p2y) {
  var radians = Razor.Math.getAngleBetweenPointsRadiants(p1x, p1y, p2x, p2y);
  var degrees = radians / Math.PI * 180;
  return degrees;
};

/**
 * Returns distance between two points.
 * @param  {Number} p1x First point x coordinate.
 * @param  {Number} p1y First point y coordinate.
 * @param  {Number} p2x Second point x coordinate.
 * @param  {Number} p2y Second point y coordinate.
 * @return {Number}        distance in pixels.
 */
Razor.Math.getDistanceBetweenPoints = function(p1x, p1y, p2x, p2y) {
  var dx = p1x - p2x;
  var dy = p1y - p2y;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Returns point based on two points and percentage between them.
 * @param  {Number} p1x First point x coordinate.
 * @param  {Number} p1y First point y coordinate.
 * @param  {Number} p2x Second point x coordinate.
 * @param  {Number} p2y Second point y coordinate.
 * @param  {number} percent Number between 0 and 1.
 * @return {Razor.Vector2}         Returns point position.
 */
Razor.Math.getPointBetweenPointsBasedOnPercentage = function(p1x, p1y, p2x, p2y, percent) {
  var point = new Razor.Vector2();
  point.setX = p1x + percent * (p2x - p1x);
  point.setY = p1y + percent * (p2y - p1y);
  return point;
};

 /**
   * Returns random number between a min an a max value.
   * @param  {Number} min  min value returned.
   * @param  {Number} max  max value returned.
   * @param  {Boolean} isRounded either the number is rounded or not.
   */
Razor.Math.getRandom = function(min, max, isRounded) {
  var int_ = isRounded == undefined ? true : isRounded;
  return int_ == false ? Math.random() * (max - min) + min : Math.round((Math.random() * (max - min) + min));
};

/**
 * Returns a Number between a min and a max value, based on a given percentage.
 * @param  {Number} percentage percentage value.
 * @param  {Number} min        min value returned.
 * @param  {Number} max        max value returned.
 * @return {Number}            value based on given percentage.
 */
Razor.Math.getValueBasedOnPercentage = function(percentage, min, max) {
  return ((percentage * (max - min)) / 100) + min;
};

/**
 * Returns Mapped value
 * @param  {Number} value   value.
 * @param  {Number} in_min  min input value.
 * @param  {Number} in_max  max input value.
 * @param  {Number} out_min min output value.
 * @param  {Number} out_max max output value.
 * @return {Number}         new mapped value.
 */
Razor.Math.map = function(value, in_min, in_max, out_min, out_max) {
  if (in_min == in_max) {
    return out_min;
  }
  return out_min + (out_max - out_min) * (value - in_min) / (in_max - in_min);
};
