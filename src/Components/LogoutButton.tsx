import { Button, Typography } from "@mui/material";

export const LogoutButton = () => {
  return (
    <Button variant="outlined" onClick={() => window.location.reload()}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        Log out
      </Typography>
    </Button>
  );
};
