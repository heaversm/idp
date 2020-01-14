
var width = window.innerWidth,
  height = window.innerHeight,
  numCircles = 100,
  minCircleSize = 4,
  maxCircleSize = 12,
  circleDark = d3.rgb(22, 220, 171),
  circleLight = d3.rgb(10, 112, 88),
  circleCollideRadius = 16,
  circleCharge = -2000; //repulsion or attraction of circles from center

var nodes = d3.range(100).map(function () {
  return {
    radius: Math.random() * maxCircleSize
      + minCircleSize
  };
}),
  root = nodes[0];
root.radius = 0;
root.fixed = true;
root.px = Math.floor(width / 2);
root.py = Math.floor(height / 2);

particlesJS.load('particles-js', 'data/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});

var force = d3.layout.force()
  .gravity(0.03)
  .charge(function (d, i) { return i ? 0 : circleCharge; })
  .nodes(nodes)
  .size([width, height]);

force.start();

var svg = d3.select(".home__circles_container").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.selectAll("circle")
  .data(nodes.slice(1))
  .enter().append("circle")
  .attr("r", function (d) { return d.radius; })
  .style({
    //"fill" :  function(d, i) { return color; },
    "fill": function (d, i) { return d3.interpolate(circleDark, circleLight)(Math.random()) },
    //"opacity" : function(d,i){ return Math.random(); } //TODO: do this with color only, not opacity
    //"opacity": 1,
  });

force.on("tick", function (e) {
  var q = d3.geom.quadtree(nodes),
    i = 0,
    n = nodes.length;

  while (++i < n) q.visit(collide(nodes[i]));

  svg.selectAll("circle")
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; });
});

svg.on("mousemove", cursorMove);
svg.on("touchmove", cursorMove);

svg.on("mouseleave", cursorEnd);
svg.on("touchend", cursorEnd);

function cursorMove() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
}

function cursorEnd() {
  root.px = Math.floor(width / 2);
  root.py = Math.floor(height / 2);
  force.resume();
}

function collide(node) {
  var r = node.radius + circleCollideRadius,
    nx1 = node.x - r,
    nx2 = node.x + r,
    ny1 = node.y - r,
    ny2 = node.y + r;
  return function (quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
        y = node.y - quad.point.y,
        l = Math.sqrt(x * x + y * y),
        r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
