import React from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

const FileUpload = ({ onDataParsed }) => {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        onDataParsed(results.data);
      },
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #444',
        padding: '20px',
        marginBottom: '20px',
      }}
    >
      <input {...getInputProps()} />
      <p>📁 Drag & drop a CSV file here, or click to select</p>
    </div>
  );
};

export default FileUpload;
