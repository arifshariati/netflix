import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#111";

const palette = {
    black,
    white,
    primary: {
        contrastText: white,
        dark: colors.green['A700'],
        main: colors.green['A400'],
        light: colors.green['A200'],
    },
    secondary: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[800],
        light: colors.red[100],
    },
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: colors.green[600],
        light: colors.green[400],
    },
    info: {
        contrastText: white,
        dark: colors.blue[900],
        main: colors.blue[600],
        light: colors.blue[400],
    },
    warning: {
        contrastText: white,
        dark: colors.orange[900],
        main: colors.orange[600],
        light: colors.orange[400],
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400],
    },
    text: {
        primary: white,
        secondary: colors.blueGrey[600],
        link: colors.blue[600],
    },
    background: {
        default: "#F7F9FC",
        paper: white,
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200],
};

export default palette;
