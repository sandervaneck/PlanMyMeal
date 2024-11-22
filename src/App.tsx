import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./Theme/AppTheme";
import { FullPage } from "./FullPage";

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <FullPage />
    </AppTheme>
  );
}
