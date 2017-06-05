var earth;

function initialize() {

  var options = {
    sky: false,
    atmosphere: true,
    dragging: true,
    tilting: true,
    zooming: true,
    center: [46.8011, 8.2266],
    zoom: 1.3
  };

  earth = new WE.map('earth_div', options);
  var natural = WE.tileLayer('http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
    tileSize: 256,
    tms: true
  });
  natural.addTo(earth);

  var toner = WE.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
    opacity: 0.6
  });
  toner.addTo(earth);

  // Start a simple rotation animation
  var before = null;
  requestAnimationFrame(function animate(now) {
      var c = earth.getPosition();
      var elapsed = before? now - before: 0;
      before = now;
      earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
      requestAnimationFrame(animate);
  });

  //markers
  var sanfranciscoMarker = WE.marker([37.7749295, -122.41941550000001]).addTo(earth);
  sanfranciscoMarker.bindPopup("<b>San Francisco, CA</b><br>currently exploring", {maxWidth: 120, closeButton: false});

  var wintervilleMarker = WE.marker([35.529051, -77.40107619999998]).addTo(earth);
  wintervilleMarker.bindPopup("<b>Winterville, NC</b><br>the homeland", {maxWidth: 120, closeButton: false});

  var newyorkcityMarker = WE.marker([40.7127837, -74.00594130000002]).addTo(earth);
  newyorkcityMarker.bindPopup("<b>New York, NY</b><br>last traversed: april 2017", {maxWidth: 120, closeButton: false});

  var ithacaMarker = WE.marker([42.4439614, -76.50188070000002]).addTo(earth);
  ithacaMarker.bindPopup("<b>Ithaca, NY</b><br>last traversed: april 2017", {maxWidth: 120, closeButton: false});

  var lovevalleyMarker = WE.marker([35.98985529999999, -80.98813189999998]).addTo(earth);
  lovevalleyMarker.bindPopup("<b>Love Valley, NC</b><br>last traversed: june 2017", {maxWidth: 120, closeButton: false});

	var klMarker = WE.marker([3.146642, 101.6958449]).addTo(earth);
  klMarker.bindPopup("<b>KL, Malaysia</b><br>last traversed: november 2015", {maxWidth: 120, closeButton: false});

  var taiwanMarker = WE.marker([23.69781, 120.96051499999999]).addTo(earth);
  taiwanMarker.bindPopup("<b>Taiwan</b><br>last traversed: 2013", {maxWidth: 120, closeButton: false});

  var honoluluMarker = WE.marker([21.5616575,-158.0715983]).addTo(earth);
  honoluluMarker.bindPopup("<b>Waialua, HI</b><br>last traversed: 2012", {maxWidth: 120, closeButton: false});

  var winterparkMarker = WE.marker([28.5999998, -81.33923519999996]).addTo(earth);
  winterparkMarker.bindPopup("<b>Winter Park, FL</b><br>the college years", {maxWidth: 120, closeButton: false});

}