"use client";

import * as React from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const AboutMenu = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event, id) => {
    event.preventDefault();
    if (id) router.push(id);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="about-button"
        aria-controls={open ? "about-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{ textTransform: 'lowercase' }}
      >
        About
      </Button>
      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={(e) => handleClose(e)}
        slotProps={{
          list: {
            "aria-labelledby": "about-button",
          },
        }}
        sx={{ textTransform: 'lowercase' }}
      >
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/about")}>
          About Conduit
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/beliefs")}>Beliefs</MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/leadership")}>
          Leadership
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/ministry/kids")}>
          Conduit Kids
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/ministry/students")}>
          Overcharge Students
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/ministry/young-adults")}>
          Young Adults
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/ministry/marriage-family")}>
          Marraige & Family
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/contact-us")}>
          Contact Us
        </MenuItem>
      </Menu>
    </>
  );
};

export default AboutMenu;
