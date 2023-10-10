import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ThemeModeContext from "./contexts/themeModeContext";
import useThemeMode from "./hooks/useThemeMode";
import Sidebar from "./components/pages/Sidebar";
import Topbar from "./components/pages/Topbar";
import Dashboard from "./components/pages/dashboard";
import Team from "./components/pages/team";
import Contacts from "./components/pages/contacts";
import Invoices from "./components/pages/invoices";
import ProfileForm from "./components/pages/profileForm";
import Calendar from "./components/pages/calendar";
import FAQ from "./components/pages/faq";
import Bar from "./components/pages/barChart";
import Pie from "./components/pages/pieChart";
import Line from "./components/pages/lineChart";
import Geography from "./components/pages/geoChart";


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
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/barChart" element={<Bar />} />
              <Route path="/pieChart" element={<Pie />} />
              <Route path="/lineChart" element={<Line />} />
              <Route path="/geoChart" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
