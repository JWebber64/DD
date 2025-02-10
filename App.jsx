import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LeagueInfoPage from "./pages/LeagueInfoPage";
import LeagueAdminPage from "./pages/LeagueAdminPage";
import TeamAdminPage from "./pages/TeamAdminPage";
import TeamInfoPage from "./pages/TeamInfoPage";
import ScoreSheetsPage from "./pages/ScoreSheetsPage";
import AuthProvider from "./context/AuthContext"; // Ensure this is correctly imported

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/league-info" element={<LeagueInfoPage />} />
        <Route path="/league-admin" element={<LeagueAdminPage />} />
        <Route path="/team-admin" element={<TeamAdminPage />} />
        <Route path="/team-info" element={<TeamInfoPage />} />
        <Route path="/score-sheets" element={<ScoreSheetsPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
