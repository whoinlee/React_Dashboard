import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeModeContext, useThemeMode } from "./theme";

function App() {
  const [theme, themeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        {/* resets css to default - */}
        <CssBaseline />
        <div className="app">
          <main className="content">
          </main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
