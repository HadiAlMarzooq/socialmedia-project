import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Tajawal, sans-serif",
    body: "Tajawal, sans-serif",
  },
  direction: 'rtl',
  colors: {
    primary: {
      50: "#f2f6f3",
      100: "#dcecdc",
      200: "#c6e2c5",
      300: "#b1d9ae",
      400: "#9bcf97",
      500: "#85c580",
      600: "#69ab65",
      700: "#4c914a",
      800: "#30772f",
      900: "#144d14",
    },
    gray: {
      50: "#f7f7f7",
      100: "#e1e1e1",
      200: "#cfcfcf",
      300: "#b1b1b1",
      400: "#9e9e9e",
      500: "#7e7e7e",
      600: "#626262",
      700: "#515151",
      800: "#3b3b3b",
      900: "#222222",
    },
  },
});

export default theme;
