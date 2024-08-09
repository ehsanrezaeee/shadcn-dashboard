const gray = {
  light: {
    "25": "#FCFCFD",
    "50": "#F9FAFB",
    "100": "#F2F4F7",
    "200": "#EAECF0",
    "300": "#D0D5DD",
    "400": "#98A2B3",
    "500": "#667085",
    "600": "#475467",
    "700": "#344054",
    "800": "#182230",
    "900": "#101828",
    "950": "#0C111D",
  },
  dark: {
    "25": "#FAFAFA",
    "50": "#F5F5F6",
    "100": "#F0F1F1",
    "200": "#ECECED",
    "300": "#CECFD2",
    "400": "#94969C",
    "500": "#85888E",
    "600": "#61646C",
    "700": "#333741",
    "800": "#1F242F",
    "900": "#161B26",
    "950": "#0C111D",
  },
};

const brand = {
  "25": "#F1F6FC",
  "50": "#D4E3F7",
  "100": "#B8D0F2",
  "200": "#AAC7F0",
  "300": "#8DB4EB",
  "400": "#6298E3",
  "500": "#377BDC",
  "600": "#2060B8",
  "700": "#1E57A7",
  "800": "#184686",
  "900": "#123464",
  "950": "#091A32",
};

const error = {
  "25": "#FFFBFA",
  "50": "#FEF3F2",
  "100": "#FEE4E2",
  "200": "#FECDCA",
  "300": "#FDA29B",
  "400": "#F97066",
  "500": "#F04438",
  "600": "#D92D20",
  "700": "#B42318",
  "800": "#912018",
  "900": "#7A271A",
  "950": "#55160C",
};

const warning = {
  "25": "#FFFCF5",
  "50": "#FFFAEB",
  "100": "#FEF0C7",
  "200": "#FEDF89",
  "300": "#FEC84B",
  "400": "#FDB022",
  "500": "#F79009",
  "600": "#DC6803",
  "700": "#B54708",
  "800": "#93370D",
  "900": "#7A2E0E",
  "950": "#4E1D09",
};

const success = {
  "25": "#F6FEF9",
  "50": "#ECFDF3",
  "100": "#DCFAE6",
  "200": "#ABEFC6",
  "300": "#75E0A7",
  "400": "#47CD89",
  "500": "#17B26A",
  "600": "#079455",
  "700": "#067647",
  "800": "#085D3A",
  "900": "#074D31",
  "950": "#053321",
};

export const Colors = {
  gray,
  brand,
  error,
  warning,
  success,
  textColor: {
    primary: {
      light: gray.light[900],
      dark: gray.dark[50],
      on_brand: { light: "white", dark: gray.dark[50] },
    },
    secondary: {
      light: gray.light[700],
      dark: gray.dark[300],
      on_brand: { light: brand[200], dark: gray.dark[300] },
      on_hover: { light: gray.light[800], dark: gray.dark[200] },
    },
    tertiary: {
      light: gray.light[600],
      dark: gray.dark[400],
      on_brand: { light: brand[200], dark: gray.dark[300] },
      on_hover: { light: gray.light[700], dark: gray.dark[300] },
    },
    quaternary: {
      light: gray.light[500],
      dark: gray.dark[400],
      on_brand: { light: brand[300], dark: gray.dark[400] },
    },
    white: {
      light: "white",
      dark: gray.dark[50],
    },
    disabled: {
      light: gray.light[500],
      dark: gray.dark[500],
    },
    placeholder: {
      light: gray.light[500],
      dark: gray.dark[400],
    },
    brand: {
      primary: {
        light: brand[900],
        dark: gray.dark[50],
      },
      secondary: {
        light: brand[700],
        dark: gray.dark[300],
      },
      tertiary: { light: brand[600], dark: gray.dark[400] },
    },
    error: {
      light: error[600],
      dark: error[400],
    },
    warning: {
      light: warning[600],
      dark: warning[400],
    },
    success: {
      light: success[600],
      dark: success[400],
    },
  },
  borderColor: {
    primary: {
      light: gray.light[300],
      dark: gray.dark[700],
    },
    secondary: {
      light: gray.light[200],
      dark: gray.dark[800],
    },
    tertiary: {
      light: gray.light[100],
      dark: gray.dark[800],
    },
    disabled: {
      light: gray.light[300],
      dark: gray.dark[700],
    },
    brand: {
      light: brand[300],
      dark: gray.dark[400],
    },
    error: {
      light: error[300],
      dark: error[400],
    },
  },
  fgColor: {
    primary: {
      light: gray.light[900],
      dark: gray.dark[50],
    },
    secondary: {
      light: gray.light[700],
      dark: gray.dark[300],
      on_hover: { light: gray.light[800], dark: gray.dark[200] },
    },
    tertiary: {
      light: gray.light[600],
      dark: gray.dark[400],
      on_hover: { light: gray.light[700], dark: gray.dark[300] },
    },
    quaternary: {
      light: gray.light[500],
      dark: gray.dark[400],
      on_hover: { light: gray.light[600], dark: gray.dark[300] },
    },
    quinary: {
      light: gray.light[400],
      dark: gray.dark[500],
      on_hover: { light: gray.light[500], dark: gray.dark[400] },
    },
    senary: {
      light: gray.light[300],
      dark: gray.dark[600],
    },
    disabled: {
      light: gray.light[400],
      dark: gray.dark[500],
    },
    brand: {
      primary: {
        light: brand[600],
        dark: brand[500],
      },
      secondary: {
        light: brand[500],
        dark: brand[500],
      },
    },
    error: {
      light: error[600],
      dark: error[500],
    },
    warning: {
      light: warning[600],
      dark: warning[500],
    },
    success: {
      light: success[600],
      dark: success[500],
    },
  },

  bgColor: {
    primary: {
      light: "white",
      dark: gray.dark[950],
      on_hover: { light: gray.light[50], dark: gray.dark[800] },
    },
    secondary: {
      light: gray.light[50],
      dark: gray.dark[900],
      on_hover: { light: gray.light[100], dark: gray.dark[800] },
    },
    tertiary: {
      light: gray.light[100],
      dark: gray.dark[800],
    },
    quaternary: {
      light: gray.light[200],
      dark: gray.dark[700],
    },

    disabled: {
      light: gray.light[100],
      dark: gray.dark[800],
    },
    active: {
      light: gray.light[50],
      dark: gray.dark[800],
    },

    overlay: {
      light: gray.light[950],
      dark: gray.dark[800],
    },
    brand: {
      primary: {
        light: brand[50],
        dark: brand[500],
      },
      secondary: {
        light: brand[100],
        dark: brand[600],
      },
      solid: {
        light: brand[600],
        dark: brand[600],
      },
      section: {
        light: brand[800],
        dark: brand[800],
      },
    },
    error: {
      primary: {
        light: error[50],
        dark: error[500],
      },
      secondary: {
        light: error[100],
        dark: error[600],
      },
      solid: {
        light: error[600],
        dark: error[600],
      },
    },
    warning: {
      primary: {
        light: warning[50],
        dark: warning[500],
      },
      secondary: {
        light: warning[100],
        dark: warning[600],
      },
      solid: {
        light: warning[600],
        dark: warning[600],
      },
    },
    success: {
      primary: {
        light: success[50],
        dark: success[500],
      },
      secondary: {
        light: success[100],
        dark: success[600],
      },
      solid: {
        light: success[600],
        dark: success[600],
      },
    },
  },
};
