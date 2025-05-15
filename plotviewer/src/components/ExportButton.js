import React from 'react';
import html2canvas from 'html2canvas';

const ExportButton = ({ elementId }) => {
  const handleExport = async () => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const canvas = await html2canvas(el);
    const link = document.createElement('a');
    link.download = 'plot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return <button onClick={handleExport}>⬇️ Export as PNG</button>;
};

export default ExportButton;
