/**
 * Debugger
 * @author andre.venancio@razorfish.com (Andre Venancio)
 */

/**
 * Razor Debugger instantiates Stats.js and dat.gui.js.
 */
Razor.Debugger = function(useFPS, useLogging) {
  Razor.FPS = useFPS;
  Razor.logging = useLogging;

  this.gui = new dat.GUI({
    autoPlace: false
  });

  this.stats = new Stats();
  this.stats.setMode(0);

  this.init();
};

/**
 * initializes the Debugger
 */
Razor.Debugger.prototype.init = function() {
  var scope = this;

  var rf = this.gui.addFolder('Razor');
  rf.add(Razor, 'FPS').onChange(function(value) {
    if (value) {
      scope.stats.domElement.style.display = 'block';
    } else {
      scope.stats.domElement.style.display = 'none';
    }
  });
  rf.add(Razor, 'logging');
  rf.open();

  this.gui.domElement.style.position = 'absolute';
  this.gui.domElement.style.right = '0px';
  this.gui.domElement.style.top = '40px';
  document.body.appendChild(this.gui.domElement);

  this.stats.domElement.style.position = 'absolute';
  this.stats.domElement.style.left = '0px';
  this.stats.domElement.style.top = '40px';
  document.body.appendChild(this.stats.domElement);

  this.stats.domElement.style.display = Razor.FPS == true ? 'block' : 'none';

};

/**
 * updates the stats before any calculation
 */
Razor.Debugger.prototype.begin = function() {
  this.stats.begin();
};

/**
 * updates the stats after all calculations
 */
Razor.Debugger.prototype.end = function() {
  this.stats.end();
};
