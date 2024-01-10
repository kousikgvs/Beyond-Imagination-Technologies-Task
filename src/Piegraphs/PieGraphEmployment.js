import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieGraphEmployment = () => {
  const chartRef = useRef();
  useEffect(() => {
    const data = [
      { type: 'FULL TIME', count: 20 },
      { type: 'PART TIME', count: 31 },
      { type: 'DAILY WAGE', count: 49 }
    ];
  
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
  
    const color = d3.scaleOrdinal(d3.schemeCategory10);
  
    d3.select(chartRef.current).selectAll("svg").remove();
  
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
  
    const pie = d3.pie().value(d => d.count);
    const arcs = pie(data);
  
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);
  
    svg.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (_, i) => color(i))
      .attr("stroke", "white")
      .style("stroke-width", "2px");
  
    svg.selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text(d => `${d.data.type} (${d.data.count})`)
      .style("fill", "black")
      .style("font-size", "12px");
  }, []);
  
  return (
    <div ref={chartRef}></div>
  );
};

export default PieGraphEmployment;
