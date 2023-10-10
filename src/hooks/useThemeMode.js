import { useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../theme/theme";

const useThemeMode = () => {
    const [mode, setMode] = useState("dark");
  
    const themeMode = useMemo(() => ({
        toggleThemeMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
    return [theme, themeMode];
};

export default useThemeMode;