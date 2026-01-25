"use client";

import * as React from "react";
import { Menu, MenuItem, IconButton, Divider, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event, id, blank) => {
    event.preventDefault();
    if (id && !blank) router.push(id);
    if (id && blank) router.push(id, { target: '_blank' })
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="about-button"
        size="large"
        aria-controls={open ? "about-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="about-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={(e) => handleClose(e)}
        slotProps={{
          list: {
            "aria-labelledby": "about-button",
          },
          paper: {
            sx: {
              width: "100vw"
            },
          },
        }}
      >
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "portfolio", false)}>
          <Typography variant='button'>Portfolio</Typography>
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "https://portfolio.btibbettphotography.com", true)}>
          <Typography variant='button'>Client Gallery</Typography>
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "offerings", false)}>
          <Typography variant='button'>Offerings</Typography>
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "https://portfolio.btibbettphotography.com/contact", true)}>
          <Typography variant='button'>Contact Us</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
