import React from "react";
import StyledLayout from "../components/StyledLayout";

const LandingPage = () => {
  return (
    <StyledLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-[#545e46] p-6 rounded-xl shadow-md text-center border border-[#c9c7c5]">
          <h3 className="text-xl font-bold text-[#dbe0da] mb-2">News</h3>
          <ul className="text-[#dbe0da] list-disc list-inside">
            <li>Team Achieved X Milestone</li>
            <li>Player Y's Performance Highlight</li>
            <li>Monthly Roundup</li>
          </ul>
        </div>
        <div className="bg-[#545e46] p-6 rounded-xl shadow-md text-center border border-[#c9c7c5]">
          <h3 className="text-xl font-bold text-[#dbe0da] mb-2">Scores</h3>
          <ul className="text-[#dbe0da] list-disc list-inside">
            <li>Game 1: Team A vs Team B</li>
            <li>Game 2: Team C vs Team D</li>
            <li>Game 3: Team E vs Team F</li>
          </ul>
        </div>
      </div>
    </StyledLayout>
  );
};

export default LandingPage;

// Repeat for other pages

const LeagueInfoPage = () => {
  return (
    <StyledLayout>
      <h1 className="text-3xl text-[#dbe0da] text-center">League Information</h1>
      <p className="text-[#dbe0da] text-center mt-4">Details about the league go here.</p>
    </StyledLayout>
  );
};

export default LeagueInfoPage;

const LeagueAdminPage = () => {
  return (
    <StyledLayout>
      <h1 className="text-3xl text-[#dbe0da] text-center">League Admin Panel</h1>
      <p className="text-[#dbe0da] text-center mt-4">Admin settings and controls go here.</p>
    </StyledLayout>
  );
};

export default LeagueAdminPage;

const TeamAdminPage = () => {
  return (
    <StyledLayout>
      <h1 className="text-3xl text-[#dbe0da] text-center">Team Administration</h1>
      <p className="text-[#dbe0da] text-center mt-4">Manage team settings and members here.</p>
    </StyledLayout>
  );
};

export default TeamAdminPage;

const TeamInfoPage = () => {
  return (
    <StyledLayout>
      <h1 className="text-3xl text-[#dbe0da] text-center">Team Information</h1>
      <p className="text-[#dbe0da] text-center mt-4">Information about your team goes here.</p>
    </StyledLayout>
  );
};

export default TeamInfoPage;

const ScoreSheetsPage = () => {
  return (
    <StyledLayout>
      <h1 className="text-3xl text-[#dbe0da] text-center">Score Sheets</h1>
      <p className="text-[#dbe0da] text-center mt-4">Game score sheets and records go here.</p>
    </StyledLayout>
  );
};

export default ScoreSheetsPage;
