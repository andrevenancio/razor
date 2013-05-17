/**
 * Debugger
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * Logger
 * @param  {...} params any given parameter separated by a coma.
 */
Razor.log = function(params) {
  if (this['logging']) {
    console.log(params);
  }
};
