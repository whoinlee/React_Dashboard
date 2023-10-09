import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeModeContext, useThemeMode } from "./theme";
import Topbar from "./pages/global/Topbar";

function App() {
  const [theme, themeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        {/* resets css to default - */}
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
