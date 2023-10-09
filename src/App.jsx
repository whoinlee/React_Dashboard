import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeModeContext, useThemeMode } from "./theme";
import Dashboard from "./pages/Dashboard";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
// import Bar from "./pages/bar";
// import Contacts from "./pages/contacts";
// import FAQ from "./pages/faq";
// import Form from "./pages/form";
// import Geography from "./pages/geography";
// import Invoices from "./pages/invoices";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import Team from "./pages/team";

function App() {
  const [theme, themeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        {/* resets css to default - */}
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/bar" element={<Bar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/team" element={<Team />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
