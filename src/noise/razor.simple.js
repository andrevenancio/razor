/**
 * Simple Noise
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * Simple implementation of noise.
 * @param  {Number} w Width.
 * @param  {Number} h Height.
 * @return {imageData}   Manipulated image data.
 */
Razor.SimpleNoise = function(w, h) {
  this.width = w || 50;
  this.height = h || 50;

  this.whiteNoiseCanvas = document.createElement('canvas');
  this.simpleNoiseCanvas = document.createElement('canvas');

  this.whiteNoiseCanvas.width = this.simpleNoiseCanvas.width = this.width;
  this.whiteNoiseCanvas.height = this.simpleNoiseCanvas.height = this.height;

  this.contextNoise = this.whiteNoiseCanvas.getContext('2d');
  this.contextSimple = this.simpleNoiseCanvas.getContext('2d');

  this.saved_alpha = this.contextSimple.globalAlpha;

  this.init();
};

/**
 * initializes Simple Noise
 */
Razor.SimpleNoise.prototype.init = function() {
  this.buildWhiteNoise();
  this.buildSimpleNoise();
};

/**
 * Builds white noise as a base for the simple noise.
 * TODO: try to build simple noise from a given image
 */
Razor.SimpleNoise.prototype.buildWhiteNoise = function() {
  var noiseImageData = this.contextSimple.createImageData(this.width, this.height);
  var pixels = noiseImageData.data;

  for (var i = 0; i < pixels.length; i += 4) {
    pixels[i] = Math.floor(Math.random() * 256);
    pixels[i + 1] = Math.floor(Math.random() * 256);
    pixels[i + 2] = Math.floor(Math.random() * 256);
    pixels[i + 3] = 255;
  }

  this.contextNoise.putImageData(noiseImageData, 0, 0);
};

/**
 * Builds Simple Noise.
 */
Razor.SimpleNoise.prototype.buildSimpleNoise = function() {
  for (var size = 4; size <= this.width; size *= 2) {
    var x = Math.floor(Math.random() * (this.width - size));
    var y = Math.floor(Math.random() * (this.height - size));

    this.contextSimple.globalAlpha = 4 / size;
    this.contextSimple.drawImage(this.whiteNoiseCanvas, x, y, size, size, 0, 0, this.width, this.height);
  }
  this.contextSimple.globalAlpha = this.saved_alpha;
};

/**
 * Returns generated noise.
 * @return {ImageData} Resulting ImageData Object.
 */
Razor.SimpleNoise.prototype.getNoise = function() {
  return this.contextSimple.getImageData(0, 0, this.width, this.height);
};
