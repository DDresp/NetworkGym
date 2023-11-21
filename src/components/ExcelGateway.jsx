import { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import * as XLSX from "xlsx";

const ExcelGateway = ({ onAddContactData, onDownloadData }) => {
  const [fileName, setFileName] = useState("");

  function handleFileUpload(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }

    reader.readAsBinaryString(file);
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
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="file"
          accept=".xlsx, .xlx"
          onChange={handleFileUpload}
          id="fileInput"
          style={{ display: "none" }}
        />
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => document.getElementById("fileInput").click()}
        >
          Upload Excel
        </Button>

        <Button colorScheme="teal" size="md" onClick={onDownloadData}>
          Download Excel
        </Button>
      </div>
      {fileName && (
        <div style={{ marginTop: "30px" }}>Uploaded File: {fileName}</div>
      )}
    </div>

  );
};

export default ExcelGateway;
