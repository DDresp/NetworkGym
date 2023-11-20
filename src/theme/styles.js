const styles = {
  global: {
    "html, body": {
      backgroundColor: "gray.900",
      color: "whiteAlpha.800",
    },
    svg: {
      cursor: "pointer",
    },

    ".greenButton": {
      backgroundColor: "#27bbff", // Green background
      border: 'none', // No border
      color: 'white', // White text
      padding: '10px 10px', // Padding inside the button
      textAlign: 'center', // Centered text
      textDecoration: 'none', // No underline on the text
      display: 'inline-block', // Align the button next to other elements
      fontSize: '14px', // Font size
      margin: '40px 0px', // Margin around the button
      cursor: 'pointer', // Cursor changes to a hand icon when you hover over it
      borderRadius: '8px', // Rounded corners
    },

    ".table": {
      border: "1px solid #424242",
    },
    ".tr": {
      display: "flex",
      width: "fit-content",
    },
    ".th, .td": { boxShadow: "inset 0 0 0 1px #424242" },
    ".th": {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "gray.400",
      padding: "0.5rem",
      fontWeight: "bold",
      fontSize: "xs",
      textTransform: "uppercase",
      textAlign: "center",
    },
    ".td > input": {
      m: "1",
      padding: "0.2rem",
      bg: "transparent",
      maxW: "100%",
    },
    ".date-wrapper": {
      display: "flex",
      alignItems: "center",
      w: "100%",
      h: "100%",
    },
    ".resizer": {
      position: "absolute",
      opacity: 0,
      top: 0,
      right: 0,
      h: "100%",
      w: "5px",
      bg: "#27bbff",
      cursor: "col-resize",
      userSelect: "none",
      touchAction: "none",
      borderRadius: "6px",
    },
    ".resizer.isResizing": {
      bg: "#2eff31",
      opacity: 1,
    },
    "*:hover > .resizer": {
      opacity: 1,
    },
  },
};

export default styles;
