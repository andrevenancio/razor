/**
 * Simple Noise
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * Simple Noise
 * @constructor
 */
Razor.SimpleNoise = function() {
  this.canvas = document.createElement('canvas');
  this.canvas_ctx = this.canvas.getContext('2d');
  this.offscreen = document.createElement('canvas');
  this.offscreen_ctx = this.offscreen.getContext('2d');
  this.saved_alpha = this.canvas_ctx.globalAlpha;

  this.offscreen.width = 20;
  this.offscreen.height = 20;

  var offscreen_id = this.offscreen_ctx.getImageData(0, 0, this.offscreen.width, this.offscreen.height);
  var offscreen_pixels = offscreen_id.data;

  for (var i = 0; i < offscreen_pixels.length; i += 4) {
    offscreen_pixels[i] =
    offscreen_pixels[i + 1] =
    offscreen_pixels[i + 2] = Math.floor(Math.random() * 256);
    offscreen_pixels[i + 3] = 255;
  }

  this.offscreen_ctx.putImageData(offscreen_id, 0, 0);

  /* Scale random iterations onto the canvas to generate Perlin noise. */
  for (var size = 4; size <= this.offscreen.width; size *= 2) {
    var x = Math.floor(Math.random() * (this.offscreen.width - size));
    var y = Math.floor(Math.random() * (this.offscreen.height - size));

    this.canvas_ctx.globalAlpha = 4 / size;
    this.canvas_ctx.drawImage(this.offscreen, x, y, size, size, 0, 0, this.canvas.width, this.canvas.height);
  }
  this.canvas_ctx.globalAlpha = saved_alpha;

  document.body.appendChild(this.canvas);
};
