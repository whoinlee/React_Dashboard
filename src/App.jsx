import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeModeContext, useThemeMode } from "./theme";
import Sidebar from "./pages/Sidebar";
import Topbar from "./pages/Topbar";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
// import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
// import Bar from "./pages/bar";
// import Pie from "./pages/pie";
// import Line from "./pages/line";
// import Geography from "./pages/geography";


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
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} />  */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
