import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./Theme/AppTheme";
import { FullPage } from "./FullPage";
import { Auth0Provider } from "@auth0/auth0-react";
import { SearchAppBar } from "./Components/SearchAppBar";
import { useState } from "react";
import { Provider } from "./utils/ApolloProvider";
import { Account } from "./graphql/schema";

export default function App(props: { disableCustomTheme?: boolean }) {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState<Account | undefined>(undefined);

  return (
    <AppTheme {...props}>
      <Provider>
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
          <SearchAppBar
            value={value}
            setValue={setValue}
            user={user}
            setUser={setUser}
          />
          <FullPage value={value} user={user} />
        </Auth0Provider>
      </Provider>
    </AppTheme>
  );
}
