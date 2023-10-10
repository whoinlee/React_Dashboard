import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeModeContext, useThemeMode } from "./theme";
import Sidebar from "./pages/Sidebar";
import Topbar from "./pages/Topbar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import ProfileForm from "./pages/profileForm";
// import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
// import Bar from "./pages/barChart";
// import Pie from "./pages/pieChart";
// import Line from "./pages/lineChart";
// import Geography from "./pages/geoChart";


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
              <Route path="/profileForm" element={<ProfileForm />} />
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/barChart" element={<Bar />} /> */}
              {/* <Route path="/pieChart" element={<Pie />} /> */}
              {/* <Route path="/lineChart" element={<Line />} /> */}
              {/* <Route path="/geoChart" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
