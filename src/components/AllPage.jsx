import { Box, Heading, Button } from "@chakra-ui/react";
import TaskTable from "./DataDisplay/Table/TaskTable";
import ExcelGateway from "./DataDisplay/Table/ExcelGateway";
import { useState } from "react";
import * as XLSX from "xlsx";
import { httpsCallable } from "firebase/functions";
import { auth, functions } from "../firebase-config";

const AllPage = () => {
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
  }

  function fetchLinkedIn() {
    const maybeWorks = httpsCallable(functions, "maybeWorks");
    const data = { text: "bla bla" };
    maybeWorks(data).then((result) => {
      console.log(result.data);
    });
  }

  function downloadData() {
    const worksheet = XLSX.utils.json_to_sheet(contactData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    XLSX.writeFile(workbook, "output.xlsx");
  }

  return (
    <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">
      <Heading mb={10}>All Contacts</Heading>
      <Button
        colorScheme="red"
        size="md"
        style={{ marginBottom: "20px" }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
      <ExcelGateway
        onAddContactData={handleContactData}
        onDownloadData={downloadData}
      />
      {contactData.length > 0 ? (
        <TaskTable
          contactData={contactData}
          onUpdateData={updateData}
          onFetchLinkedIn={fetchLinkedIn}
        />
      ) : (
        <p>No contact data, please import your excel</p>
      )}
    </Box>
  );
};

export default AllPage;
