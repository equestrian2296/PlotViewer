import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import PlotDisplay from './components/PlotDisplay';
import ExportButton from './components/ExportButton';

function App() {
  const [plotData, setPlotData] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Plot Viewer</h1>
      <FileUpload onDataParsed={setPlotData} />
      {plotData && (
        <>
          <PlotDisplay data={plotData} />
          <ExportButton elementId="plot-div" />
        </>
      )}
    </div>
  );
}

export default App;
