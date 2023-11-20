import { useState } from "react";
import * as XLSX from "xlsx";

const ExcelGateway = ({ onAddContactData, onDownloadData }) => {
  function handleFileUpload(e) {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet, {
        defval: "",
      });
      onAddContactData(parsedData);
      console.log(parsedData);
    };
  }

  return (
    <div>
      <input
        className="greenButton"
        type="file"
        accept=".xlsx, .xlx"
        onChange={handleFileUpload}
      />
      <button onClick={onDownloadData}>Download Excel</button>
    </div>
  );
};

export default ExcelGateway;
