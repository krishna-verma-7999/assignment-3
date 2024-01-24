import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type HeaderProps = {
  isAuthorized: boolean;
  logoutHandler: () => void;
};

export default function Header({ isAuthorized, logoutHandler }: HeaderProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brand
          </Typography>
          {!isAuthorized ? (
            <Button color="inherit">Login</Button>
          ) : (
            <Button color="inherit" onClick={() => logoutHandler()}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
