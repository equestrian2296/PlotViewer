import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const PlotDisplay = ({ data }) => {
  const [chartType, setChartType] = useState('scatter');

  const x = Object.keys(data[0])[0];
  const y = Object.keys(data[0])[1];

  const plotData = [
    {
      x: data.map((row) => row[x]),
      y: data.map((row) => row[y]),
      type: chartType === 'bar' ? 'bar' : 'scatter',
      mode: chartType === 'bar' ? undefined : 'lines+markers',
      marker: { color: '#3dc6f4' },
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setChartType('scatter')}>Scatter</button>
        <button onClick={() => setChartType('bar')}>Bar</button>
      </div>
      <div id="plot-div">
        <Plot
          data={plotData}
          layout={{
            width: 800,
            height: 400,
            paper_bgcolor: '#111',
            plot_bgcolor: '#111',
            font: { color: '#f0f0f0' },
            title: `${chartType.toUpperCase()} Plot of ${y} vs ${x}`,
          }}
        />
      </div>
    </div>
  );
};

export default PlotDisplay;
