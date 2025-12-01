"use client";

import * as React from "react";
import { Menu, MenuItem, IconButton, Divider } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
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
              width: "calc(100vw - 36px)",
            },
          },
        }}
      >
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/about")}>About</MenuItem>
        <Divider variant="middle" flexItem />
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
          Marriage & Family
        </MenuItem>
        <Divider variant="middle" flexItem />
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/grow")}>Grow</MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/next-steps")}>
          Next Steps
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/grow/baptism")}>
          Baptism
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/grow/discipleship")}>
          Discipleship
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/grow/serve-team")}>
          Serve Team
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/grow/small-groups")}>
          Small Groups
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/prayer-wall")}>
          Prayer Wall
        </MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/your-story")}>
          Share Your Story
        </MenuItem>
        <Divider variant="middle" flexItem />
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/visit")}>Visit</MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/events")}>Events</MenuItem>
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/give")}>Give</MenuItem>
        <Divider variant="middle" flexItem />
        <MenuItem sx={{ textTransform: 'lowercase' }} onClick={(e) => handleClose(e, "/contact-us")}>
          Contact Us
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
