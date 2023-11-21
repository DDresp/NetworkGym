import { Checkbox } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const CheckCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [didChange, setDidChange] = useState(false);

  const onCheckChange = (e) => {
    table.options.meta?.updateData(
      row.index,
      column.id,
      e.target.checked ? "x" : ""
    );
    setDidChange(true);
  };

  return (
    <div className={`check-wrapper${didChange ? " changed" : ""}`}>
      <Checkbox
        isChecked={initialValue === "x" ? true : false}
        onChange={onCheckChange}
        colorScheme="teal"
      ></Checkbox>
    </div>
  );
};

export default CheckCell;
