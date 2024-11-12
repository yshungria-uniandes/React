// src/App.jsx

import React from "react";
import UploadPDF from "./components/UploadPDF";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center mt-4">Aplicación de Carga de PDF</h1>
      <UploadPDF />
    </div>
  );
};

export default App;
