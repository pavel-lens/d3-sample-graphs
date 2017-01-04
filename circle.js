var circle = d3.selectAll("circle");

circle.style("fill", "steelblue");
circle.attr("r", 20);

// circle.attr("cx", function() { return Math.random() * 720; });

circle.data([32, 57, 112]);
circle.attr("r", function(d) { return Math.sqrt(d)*3; });
circle.attr("cx", function(d, i) { return i * 100 + 30; });

// Add circles based on data
var svg = d3.select("svg");

svg.selectAll("circle")
  .data([32, 57, 112, 293])
  // .transition()
  .enter().append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) { return i * 100 + 30; })
    .attr("r", function(d) { return Math.sqrt(d); })
    .style("fill", "purple")

// Remove circles based on data
// var circle = svg.selectAll("circle")
//   .data([32, 57]);
// circle.exit().remove();

// Basic animating
var circle = svg.selectAll("circle");
circle
  .transition()
  .delay(750)
  .duration(2000)
  // .each("start", function() { d3.select(this).style("color", "steelblue"); })
  .style("fill", "green")
  .attr("r", 30)
  .attr("cx", (d, i) => (i*200)+50)
  .attr("cy", (d, i) => (i+1)*75)
