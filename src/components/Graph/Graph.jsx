import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import styles from './graph.module.css';

const Graph = () => {
  const salesSvgRef = useRef();
  const purchaseSvgRef = useRef();

  useEffect(() => {
    // Sample Data: Sales and Purchases over time
    const data = [
      { date: '2025-02-01', sales: 120, purchases: 80 },
      { date: '2025-02-02', sales: 150, purchases: 100 },
      { date: '2025-02-03', sales: 180, purchases: 130 },
      { date: '2025-02-04', sales: 200, purchases: 160 },
      { date: '2025-02-05', sales: 220, purchases: 180 },
      { date: '2025-02-06', sales: 250, purchases: 210 },
      { date: '2025-02-07', sales: 300, purchases: 240 },
    ];

    const parseDate = d3.timeParse('%Y-%m-%d');
    data.forEach(d => {
      d.date = parseDate(d.date);
    });

    // Set SVG dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 40, right: 40, bottom: 50, left: 60 };

    // Function to create a line graph
    const createGraph = (svgRef, data, title, lineColor, circleColor) => {
      const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .style('border', '1px solid #ddd', 'width', '100%');

      // Scales
      const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
        .range([margin.left, width - margin.right]);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.sales, d.purchases))])
        .nice()
        .range([height - margin.bottom, margin.top]);

      // Line generator
      const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.sales));

      // Draw the line for sales or purchases
      svg.append('path')
        .data([data])
        .attr('fill', 'none')
        .attr('stroke', lineColor)
        .attr('stroke-width', 2)
        .attr('d', line);

      // Circles for data points
      svg.selectAll('.salesCircle')
        .data(data)
        .enter().append('circle')
        .attr('class', 'salesCircle')
        .attr('cx', d => xScale(d.date))
        .attr('cy', d => yScale(d.sales))
        .attr('r', 4)
        .attr('fill', circleColor);

      // Add Axes
      svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).ticks(d3.timeDay.every(1)))
        .style('font-size', '12px');

      svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .style('font-size', '12px');

      // Title
      svg.append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '18px')
        .style('font-weight', 'bold')
        .text(title);
    };

    // Create the Sales and Purchases graphs
    createGraph(salesSvgRef, data, 'Sales Of Day', '#007bff', '#007bff');
    createGraph(purchaseSvgRef, data, 'Purchases Of Day', '#ff6347', '#ff6347');

    // Cleanup on unmount
    return () => {
      d3.select(salesSvgRef.current).selectAll('*').remove();
      d3.select(purchaseSvgRef.current).selectAll('*').remove();
    };
  }, []);

  return (
    <div className={styles.graphContainer}>
      <h2 className={styles.title}>Sales and Purchases Graphs</h2>

      <div className={styles.graphsWrapper}>
        {/* Sales Graph */}
        <div className={styles.graphItem}>
         
          <svg ref={salesSvgRef}></svg>
        </div>

        {/* Purchases Graph */}
        <div className={styles.graphItem}>

          <svg ref={purchaseSvgRef}></svg>
        </div>
      </div>
    </div>
  );
};

export default Graph;
