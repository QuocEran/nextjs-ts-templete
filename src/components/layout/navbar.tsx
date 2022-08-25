import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import CustomButton from "../button";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <CustomButton color="inherit" variant="outlined">
            ĐĂNG NHẬP
          </CustomButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
