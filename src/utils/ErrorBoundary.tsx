import { Typography, Box, Button } from "@mui/material";
import React, { ReactNode } from "react";

type State = { hasError: boolean };

type Props = { children: ReactNode };

export default class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  componentDidCatch(error: Error, info: any) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}

const ErrorMessage = () => (
  <div style={{ textAlign: "center" }}>
    <Typography variant="h5">Something went wrong.</Typography>
    <Box mt={3} />
    <Button variant="outlined" onClick={() => window.location.reload()}>
      Try again!
    </Button>
  </div>
);
