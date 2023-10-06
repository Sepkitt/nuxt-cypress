// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";
import "@fontsource/roboto-mono";
import "helvatica-neue-lt/index.css";
import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles';

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // Your theme colors here
    text: "#707070",
    primary: "#6c63ff",
    accent: "#C0F1FF",
    posbg: "#2B395D",
    tertiary: "#282A2D",
    background: "#151B27",
    info: "#161B26",
    screen: "#1B212E",
    secondary: "#fb8c00",
    warning: "#FE9E74",
    error: "#fb8c00",
    success: "#34BE82",
    keypadBtn: "#212837",
    bright: "#E2E2E2",
    services: "#2F3A53",
    totals: '#8b909e',
    change: '#B71C1C'
  }
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "darkTheme",
    themes: {
      darkTheme,
    },
  },
  icons: { defaultSet: 'mdi', sets: { mdi } },
});

export default vuetify;
