"use client";

import { Button, ListItem, Stack, Box, useTheme, Link, Typography } from "@mui/material";
import NextLink from 'next/link'

const LeftBar = () => {
  const theme = useTheme();
  return (<></>
    // <Box
    //   sx={{
    //     position: "fixed",
    //     top: 74,
    //     left: 0,
    //     zIndex: 2,
    //     height: "80vh",
    //     borderRight: `solid 4px ${theme.palette.primary.dark}`,
    //     borderTop: `solid 4px ${theme.palette.primary.dark}`,
    //     borderBottom: `solid 4px ${theme.palette.primary.dark}`,
    //     borderTopRightRadius: "29px",
    //     borderBottomRightRadius: "29px",
    //   }}
    // >
    //     <Box
    //         sx={{
    //             height: "100%",
    //             borderRight: `solid 4px ${theme.palette.primary.main}`,
    //             borderTop: `solid 4px ${theme.palette.primary.main}`,
    //             borderBottom: `solid 4px ${theme.palette.primary.main}`,
    //             borderTopRightRadius: "25px",
    //             borderBottomRightRadius: "25px",
    //         }}
    //     >
    //     <Stack
    //         sx={{
    //         height: "100%",
    //         borderRight: `solid 4px ${theme.palette.primary.light}`,
    //         borderTop: `solid 4px ${theme.palette.primary.light}`,
    //         borderBottom: `solid 4px ${theme.palette.primary.light}`,
    //         borderTopRightRadius: "21px",
    //         borderBottomRightRadius: "21px",
    //         backgroundColor: theme.palette.primary.paper
    //         }}
    //     >
    //         <ListItem>
    //         <Link component={NextLink} href='/about' title='About'>
    //             <Typography variant='h6'>About</Typography>
    //         </Link>
    //         </ListItem>
    //         <ListItem>
    //         <Link component={NextLink} href='/portfolio' title='Portfolio'>
    //             <Typography variant='h6'>Portfolio</Typography>
    //         </Link>
    //         </ListItem>
    //         <ListItem>
    //         <Link component={NextLink} href='/experience' title='Experience'>
    //             <Typography variant='h6'>Experience</Typography>
    //         </Link>
    //         </ListItem>
    //         <ListItem>
    //         <Link component={NextLink} href='/pricing' title='Pricing'>
    //             <Typography variant='h6'>Pricing</Typography>
    //         </Link>
    //         </ListItem>
    //         <ListItem>
    //         <Link component={NextLink} href='/schedule' title='Schedule'>
    //             <Typography variant='h6'>Schedule</Typography>
    //         </Link>
    //         </ListItem>
    //     </Stack>
    //     </Box>
    // </Box>
  );
};

export default LeftBar;
