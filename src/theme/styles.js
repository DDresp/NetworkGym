const styles = {
  global: {
    "html, body": {
      backgroundColor: "gray.900",
      color: "whiteAlpha.800",
    },
    svg: {
      cursor: "pointer",
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
      textAlign: "center",
    },
    ".th.active": {
      backgroundColor: "#0A66C2",
    },
    ".td > input": {
      m: "1",
      padding: "0.2rem",
      bg: "transparent",
      maxW: "100%",
    },
    ".check-wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      w: "100%",
      h: "100%",
    },
    ".check-wrapper.changed": {
      backgroundColor: "#e3da27",
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
      bg: "#008080",
      cursor: "col-resize",
      userSelect: "none",
      touchAction: "none",
      borderRadius: "6px",
    },
    ".resizer.isResizing": {
      bg: "#008080",
      opacity: 1,
    },
    "*:hover > .resizer": {
      opacity: 1,
    },
  },
};

export default styles;
