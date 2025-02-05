import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamInfoPage = ({ userRole }) => {
  const [teamName, setTeamName] = useState("Your Team Name");
  const [teamLogo, setTeamLogo] = useState("https://via.placeholder.com/100");
  const [news, setNews] = useState([
    { id: 1, text: "Latest announcements and updates..." },
  ]);
  const [schedule, setSchedule] = useState([
    { id: 1, text: "Game vs Team X on 05/10/2025" },
    { id: 2, text: "Game vs Team Y on 05/14/2025" },
  ]);
  const [players, setPlayers] = useState([
    { id: 1, name: "John Smith", stats: "Player stats here..." },
    { id: 2, name: "Mike Johnson", stats: "Player stats here..." },
  ]);
  const [socialMedia, setSocialMedia] = useState([
    { id: 1, platform: "Instagram", link: "https://instagram.com" },
    { id: 2, platform: "Facebook", link: "https://facebook.com" },
  ]);

  const handleEditTeamName = () => {
    const newName = prompt("Enter new team name:", teamName);
    if (newName) setTeamName(newName);
  };

  return (
    <div className="w-full mx-auto rounded-lg bg-[#7c866b] shadow-lg min-h-[800px] flex flex-col relative">
      {/* Header */}
      <header className="relative flex flex-col items-center bg-gradient-to-r from-[#111613] via-[#2f3827] to-[#111613] p-4 rounded-t-lg bg-opacity-90">
        {/* Nav Buttons */}
        <div className="absolute top-4 right-4">
          {/* Top row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {/* Navigation buttons top row */}
          </div>
          {/* Bottom row */}
          <div className="grid grid-cols-3 gap-2">
            {/* Navigation buttons bottom row */}
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/xSFBR6h9/logo1-ezgif-com-crop.png"
            alt="Diamond Data Logo"
            className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] object-contain mb-4 rounded-lg hover:scale-105 transition-transform"
          />
          <div className="bg-[#545e46] px-2 md:px-3 py-1 md:py-2 rounded-md shadow-md text-center hover:scale-105 transition-transform">
            <h1 className="font-title text-[#dbe0da] text-lg sm:text-xl md:text-2xl">Diamond Data</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-8 flex-grow flex flex-col items-center bg-opacity-90">
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 w-full">
          {/* Content Cards */}
          {/* News Card */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Team News</h2>
            <ul className="list-disc list-inside mt-2 overflow-auto h-[200px]">
              {news.map(item => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            {userRole === "admin" && (
              <button className="mt-2 nav-button">Add News</button>
            )}
          </div>

          {/* Schedule Card */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Upcoming Schedule</h2>
            <ul className="list-disc list-inside mt-2 overflow-auto h-[200px]">
              {schedule.map(item => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            {userRole === "admin" && (
              <button className="mt-2 nav-button">Add Schedule</button>
            )}
          </div>

          {/* Player Profiles Card */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Player Profiles</h2>
            <ul className="list-disc list-inside mt-2 overflow-auto h-[200px]">
              {players.map(player => (
                <li key={player.id}>{player.name}</li>
              ))}
            </ul>
          </div>

          {/* Social Media Card */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Social Media Links</h2>
            <ul className="list-disc list-inside mt-2 overflow-auto h-[200px]">
              {socialMedia.map(item => (
                <li key={item.id}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#111613] via-[#2f3827] to-[#111613] p-4 rounded-b-lg">
        <p className="text-[#dbe0da] text-center text-sm">© 2025 Diamond Data. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TeamInfoPage;