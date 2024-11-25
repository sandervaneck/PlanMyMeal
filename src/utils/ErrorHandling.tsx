import { Snackbar, IconButton } from "@mui/material";
import React from "react";
import { ReactNode, useState } from "react";

export const ErrorContext = React.createContext<(message?: string) => void>(
  (message) => {}
);

export const ErrorProvider = (props: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const handleClose = () => setMessage(null);

  return (
    <ErrorContext.Provider
      value={(message) => {
        if (message != null) setMessage(message);
        else setMessage("Er is een fout opgetreden");
      }}
    >
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={message != null}
        onClose={handleClose}
        message={message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            Close
          </IconButton>
        }
      />
      {props.children}
    </ErrorContext.Provider>
  );
};

export const ErrorConsumer = ErrorContext.Consumer;
