import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledLayout from "../components/StyledLayout";

const LandingPage = () => {
  return (
    <StyledLayout>
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#dbe0da]">Welcome to Diamond Data</h1>
        <p className="text-[#dbe0da] mt-4 text-center max-w-2xl">
          Your go-to app for managing and viewing softball team stats and score sheets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
          {[
            { path: "/league-info", label: "League Info" },
            { path: "/league-admin", label: "League Admin" },
            { path: "/team-stats", label: "Team Stats" },
            { path: "/team-admin", label: "Team Admin" },
            { path: "/score-sheets", label: "Score Sheets" }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="bg-[#545e46] p-6 rounded-lg shadow-md text-center border border-[#c9c7c5] text-[#dbe0da] hover:bg-[#AA8B56] transition"
            >
              <h3 className="text-xl font-bold">{label}</h3>
            </Link>
          ))}
        </div>
      </div>
    </StyledLayout>
  );
};

export default LandingPage;
