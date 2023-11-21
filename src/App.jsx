import { Box, Heading } from "@chakra-ui/react";
import TaskTable from "./components/TaskTable";
import ExcelGateway from "./components/ExcelGateway";
import { useState } from "react";
import * as XLSX from "xlsx";

function App() {
  const [contactData, setContactData] = useState([]);

  function handleContactData(data) {
    setContactData(data);
  }

  function updateData(rowIndex, columnId, value) {
    setContactData((data) =>
      data.map((row, index) =>
        index === rowIndex
          ? {
              ...data[rowIndex],
              [columnId]: value,
            }
          : row
      )
    );
    console.log(contactData);
  }

  function fetchLinkedIn() {
    console.log("fetch linkedIn")
  }

  function downloadData() {
    const worksheet = XLSX.utils.json_to_sheet(contactData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    XLSX.writeFile(workbook, "output.xlsx");
  }

  return (
    <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
      <Heading mb={10}>TanStack Table</Heading>
      <ExcelGateway
        onAddContactData={handleContactData}
        onDownloadData={downloadData}
      />
      {contactData.length > 0 ? (
        <TaskTable contactData={contactData} onUpdateData={updateData} onFetchLinkedIn={fetchLinkedIn} />
      ) : (
        <p>No contact data, please import your excel</p>
      )}
    </Box>
  );
}

export default App;
