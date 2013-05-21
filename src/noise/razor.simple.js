/**
 * Simple Noise
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * Simple implementation of noise.
 * @return {imageData}   Manipulated image data.
 */
Razor.SimpleNoise = function() {
  this.width = 50;
  this.height = 50;

  this.whiteNoiseCanvas = document.createElement('canvas');
  this.simpleNoiseCanvas = document.createElement('canvas');

  this.contextNoise = this.whiteNoiseCanvas.getContext('2d');
  this.contextSimple = this.simpleNoiseCanvas.getContext('2d');

  this.R = 0;
  this.G = 0;
  this.B = 0;
  this.A = 1;

  this.isGrayscale = true;

  this.init();
};

/**
 * initializes Simple Noise
 */
Razor.SimpleNoise.prototype.init = function() {
  this.setDetail(this.width, this.height);
  this.generate();
};

/**
 * Sets detail level, the smaller the faster to compute.
 * @param  {Number} detailW Detail in pixels.
 * @param  {Number} detailH Hetail in pixels.
 */
Razor.SimpleNoise.prototype.setDetail = function(detailW, detailH) {
  this.width = detailW;
  this.height = detailH;

  this.whiteNoiseCanvas.width = this.simpleNoiseCanvas.width = this.width;
  this.whiteNoiseCanvas.height = this.simpleNoiseCanvas.height = this.height;
};

Razor.SimpleNoise.prototype.setRed = function(value) {
  this.R = value;
};

Razor.SimpleNoise.prototype.setGreen = function(value) {
  this.G = value;
};

Razor.SimpleNoise.prototype.setBlue = function(value) {
  this.B = value;
};

/**
 * Rebuilds the experiment, everytime a parameter is changed
 */
Razor.SimpleNoise.prototype.generate = function() {
  this.buildWhiteNoise();
  //this.buildSimpleNoise();
};

Razor.SimpleNoise.prototype.getRandom = function() {
  var random = Math.random();
  if (this.isGrayscale) {
    random = 0;
  }
  return random;
};

/**
 * Builds white noise as a base for the simple noise.
 * TODO: try to build simple noise from a given image
 */
Razor.SimpleNoise.prototype.buildWhiteNoise = function() {
  var noiseImageData = this.contextSimple.createImageData(this.width, this.height);
  var pixels = noiseImageData.data;

  if (this.isGrayscale) {
    for (var i = 0; i < pixels.length; i += 4) {
      var random = Math.random();
      pixels[i] = random * this.R;
      pixels[i + 1] = random * this.G;
      pixels[i + 2] = random * this.B;
      pixels[i + 3] = 255;
    }
  } else {
    for (var i = 0; i < pixels.length; i += 4) {
      var random = Math.random();
      pixels[i] = Math.random() * this.R;
      pixels[i + 1] = Math.random() * this.G;
      pixels[i + 2] = Math.random() * this.B;
      pixels[i + 3] = 255;
    }
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
  this.contextSimple.globalAlpha = this.A;
};

/**
 * Returns white noise.
 * @return {ImageData} Resulting ImageData Object.
 */
Razor.SimpleNoise.prototype.getNoise = function() {
  return this.contextNoise.getImageData(0, 0, this.width, this.height);
};

/**
 * Returns generated noise.
 * @return {ImageData} Resulting ImageData Object.
 */
Razor.SimpleNoise.prototype.getSimple = function() {
  return this.contextSimple.getImageData(0, 0, this.width, this.height);
};
