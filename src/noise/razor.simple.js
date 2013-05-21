/**
 * Simple Noise
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * [ description]
 * @param  {Number} w Width.
 * @param  {Number} h Height.
 * @return {imageData}   Manipulated image data.
 */
Razor.SimpleNoise = function(w, h) {
  this.width = w || 50;
  this.height = h || 50;

  this.noise = document.createElement('canvas');
  this.simple = document.createElement('canvas');

  this.contextNoise = this.noise.getContext('2d');
  this.contextSimple = this.simple.getContext('2d');

  this.saved_alpha = this.contextSimple.globalAlpha;
  this.noise.width = this.width;
  this.noise.height = this.height;

  var noiseImageData = this.contextSimple.createImageData(this.width, this.height);
  var pixels = noiseImageData.data;

  for (var i = 0; i < pixels.length; i += 4) {
    pixels[i] = Math.floor(Math.random() * 256);
    pixels[i + 1] = Math.floor(Math.random() * 256);
    pixels[i + 2] = Math.floor(Math.random() * 256);
    pixels[i + 3] = 255;
  }

  this.contextNoise.putImageData(noiseImageData, 0, 0);

  for (var size = 4; size <= this.width; size *= 2) {
    var x = Math.floor(Math.random() * (this.width - size));
    var y = Math.floor(Math.random() * (this.height - size));

    this.contextSimple.globalAlpha = 4 / size;
    this.contextSimple.drawImage(this.noise, x, y, size, size, 0, 0, this.width, this.height);
  }
  this.contextSimple.globalAlpha = this.saved_alpha;

  return this.contextSimple.getImageData(0, 0, this.width, this.height);
};
