import { Box, Heading } from "@chakra-ui/react";
import TaskTable from "./components/TaskTable";
import UploadExcel from "./components/UploadExcel";
import { useState } from "react";

function App() {
  const [contactData, setContactData] = useState([]);

  function handleContactData(data) {
    setContactData(data);
  }

  function updateData(rowIndex, columnId, value) {
    setContactData(data => data.map(
      (row, index) => 
       index === rowIndex ? {
        ...data[rowIndex],
        [columnId]: value,
       } :
       row
    ))
    console.log(contactData);
  }

  return (
    <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
      <Heading mb={10}>TanStack Table</Heading>
      <UploadExcel onAddContactData={handleContactData} />
      {contactData.length > 0 ? (
        <TaskTable contactData={contactData} onUpdateData={updateData} />
      ) : (
        <p>No contact data, please import your excel</p>
      )}
    </Box>
  );
}

export default App;
