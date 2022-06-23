import * as d3 from 'd3'

export default function renderDots(data: number[]) {
  const root = d3.select('#root')
  const canvas = root.append('canvas')
  .attr('width', window.innerWidth)
  .attr('height', window.innerHeight)

  const canvasEl = canvas.node()

  if (!canvasEl) {
    throw new Error('Could not find canvas element')
  }

  const context = canvasEl.getContext('2d')

  const dataContainer = root.append('custom')
 
  drawDots(data);
  
  function drawDots(data: number[]) {
    const scale = d3.scaleLinear()
      .range([10, 390])
      .domain(d3.extent(data))
  
    const dataBinding = dataContainer.selectAll("custom.rect")
      .data(data, function(d) {
        return d;
      });
  
    dataBinding
      .attr("size", 15)
      .attr("fillStyle", "green");
  
    dataBinding.enter()
      .append("custom")
      .classed("rect", true)
      .attr("x", scale)
      .attr("y", 100)
      .attr("size", 8)
      .attr("fillStyle", "red");
  
    dataBinding.exit()
      .attr("size", 5)
      .attr("fillStyle", "lightgrey");
  
    drawCanvas();
  }
  
  function drawCanvas() {

    if (!context) {
      throw new Error('Could not find canvas element')
    }
  
    // clear canvas
    context.fillStyle = "#fff";
    context.rect(0, 0, canvas.attr("width"), canvas.attr("height"));
    context.fill();
  
    var elements = dataContainer.selectAll("custom.rect");
    elements.each(function(d) {
      var node = d3.select(this);
  
      context.beginPath();
      context.fillStyle = node.attr("fillStyle");
      context.rect(node.attr("x"), node.attr("y"), node.attr("size"), node.attr("size"));
      context.fill();
      context.closePath();
  
    })
  }
}