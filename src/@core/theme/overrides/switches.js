const Switch = (theme) => ({
  MuiSwitch: {
    styleOverrides: {
      root: {
        "& .MuiSwitch-track": {
          backgroundColor: `rgb(${theme.palette.customColors.main})`,
        },
      },
    },
  },
});

export default Switch;
