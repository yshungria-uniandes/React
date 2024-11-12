// src/components/UploadPDF.jsx

import React, { useState } from "react";

const UploadPDF = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [message, setMessage] = useState("");

  // Función para manejar el cambio de archivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setMessage("");
    } else {
      setMessage("Por favor, selecciona un archivo PDF.");
      setPdfFile(null);
    }
  };

  // Función para manejar la subida
  const handleUpload = () => {
    if (pdfFile) {
      setMessage("El archivo se ha subido correctamente!");
      console.log("Archivo PDF:", pdfFile);
    } else {
      setMessage("Por favor, selecciona un archivo antes de subirlo.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Sube tu Documento PDF</h3>
          
          <div className="mb-3">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
          
          <div className="d-grid gap-2">
            <button onClick={handleUpload} className="btn btn-primary">
              Subir PDF
            </button>
          </div>
          
          {message && (
            <div className="alert mt-3" role="alert" style={{ color: "#0d6efd" }}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPDF;
