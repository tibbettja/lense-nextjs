"use client";

import * as React from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const GrowMenu = () => {
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
        id="grow-button"
        aria-controls={open ? "grow-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        sx={{ textTransform: 'lowercase' }}
      >
        Grow
      </Button>
      <Menu
        id="grow-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={(e) => handleClose(e)}
        slotProps={{
          list: {
            "aria-labelledby": "grow-button",
          },
        }}
      >
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
      </Menu>
    </>
  );
};

export default GrowMenu;
