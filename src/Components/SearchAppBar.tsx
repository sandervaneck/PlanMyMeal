import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Container } from "@mui/material";
import { Account } from "../graphql/schema";
import { LoginButton, LoginDialog } from "./LoginButton";
import { useState } from "react";
import { LogoutButton } from "./LogoutButton";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const SearchAppBar = ({
  value,
  setValue,
  user,
  setUser,
}: {
  setUser: (a: Account) => void;
  user: Account | undefined;
  value: number;
  setValue: (n: number) => void;
}) => {
  const [openDialog, setopenDialog] = useState(false);
  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              SwipingChef
            </Typography>

            <Button
              onClick={() => setValue(0)}
              variant={value === 0 ? "contained" : "outlined"}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Add Recipe
              </Typography>
            </Button>
            <Button variant={value === 1 ? "contained" : "outlined"}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={() => setValue(1)}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                My Recipes
              </Typography>
            </Button>
            {user === undefined ? (
              <>
                <LoginButton
                  user={user}
                  setUser={setUser}
                  open={openDialog}
                  setOpen={setopenDialog}
                />
                <LoginDialog
                  open={openDialog}
                  setOpen={setopenDialog}
                  setUser={setUser}
                />
              </>
            ) : (
              <>
                <LogoutButton />
              </>
            )}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
