const Card = (theme) => ({
  MuiCard: {
    styleOverrides: {
      root: {
        "& .card-more-options": {
          marginTop: theme.spacing(-1),
          marginRight: theme.spacing(-3),
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        "& .MuiCard-root:has(> *:nth-child(3))": {
          justifyContent: "space-between",
        },
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5),
        "& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root":
          {
            paddingTop: 0,
          },
      },
      action: {
        marginTop: 0,
        marginRight: 0,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5),
        "& + .MuiCardContent-root": {
          paddingTop: 0,
          borderRadius: 0,
        },
        "& + .MuiCardActions-root": {
          paddingTop: 0,
        },
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: theme.spacing(5),
        "& .card-action-dense": {
          padding: theme.spacing(0, 2.5, 2.5),
          ".MuiCard-root .MuiCardMedia-root + &": {
            paddingTop: theme.spacing(2.5),
          },
          ".MuiCard-root &:first-of-type": {
            paddingY: theme.spacing(5),
            "& + .MuiCardContent-root": {
              paddingTop: 0,
            },
            "& + .MuiCardHeader-root": {
              paddingTop: 0,
            },
          },
        },
        "& .MuiButton-text": {
          paddingX: theme.spacing(2.5),
        },
      },
    },
  },
});

export default Card;
