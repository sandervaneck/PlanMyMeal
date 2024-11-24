import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./Theme/AppTheme";
import { FullPage } from "./FullPage";
import { Auth0Provider } from "@auth0/auth0-react";
import { SearchAppBar } from "./Components/SearchAppBar";
import { useState } from "react";

export default function App(props: { disableCustomTheme?: boolean }) {
  const [value, setValue] = useState(0);
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Auth0Provider
        domain="dev-4qxzf6zv.us.auth0.com"
        clientId="A8hi0vPwLlcP2Vmy59mtVUVreaBrK4Va"
        authorizationParams={{
          audience: "planmymeal",
          redirect_uri: window.location.origin,
        }}
      >
        <CssBaseline />
        <SearchAppBar value={value} setValue={setValue} />
        <FullPage value={value} />
      </Auth0Provider>
    </AppTheme>
  );
}
