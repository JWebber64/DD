import React, { useState } from 'react';

const TeamAdminPage = () => {
  const [teamName, setTeamName] = useState("Your Team Name");
  const [teamLogo, setTeamLogo] = useState("https://via.placeholder.com/100");
  const [primaryColor, setPrimaryColor] = useState("#545e46");
  const [secondaryColor, setSecondaryColor] = useState("#2f3827");
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
  const [teamPassword, setTeamPassword] = useState("");

  const handleEditTeamName = () => {
    const newName = prompt("Enter new team name:", teamName);
    if (newName) setTeamName(newName);
  };

  const handleUploadLogo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNews = () => {
    const newText = prompt("Enter news text:");
    if (newText) {
      setNews([...news, { id: news.length + 1, text: newText }]);
    }
  };

  const handleAddSchedule = () => {
    const newText = prompt("Enter schedule text:");
    if (newText) {
      setSchedule([...schedule, { id: schedule.length + 1, text: newText }]);
    }
  };

  const handleAddPlayer = () => {
    const playerName = prompt("Enter player name:");
    const playerStats = prompt("Enter player stats:");
    if (playerName && playerStats) {
      setPlayers([...players, { id: players.length + 1, name: playerName, stats: playerStats }]);
    }
  };

  const handleAddSocialMedia = () => {
    const platform = prompt("Enter social media platform:");
    const link = prompt("Enter social media link:");
    if (platform && link) {
      setSocialMedia([...socialMedia, { id: socialMedia.length + 1, platform, link }]);
    }
  };

  const handleSetPassword = () => {
    const newPassword = prompt("Enter new team password:");
    if (newPassword) setTeamPassword(newPassword);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#7c866b] text-[#dbe0da]">
      <main className="flex-grow p-8">
        {/* Team Logo and Name */}
        <div className="bg-[#545e46] p-4 rounded-lg shadow-md flex items-center mb-6">
          <img src={teamLogo} alt="Team Logo" className="h-[100px] w-[100px] object-contain mr-4" />
          <div>
            <h1 className="text-3xl font-bold">{teamName}</h1>
            <button onClick={handleEditTeamName} className="mt-2 nav-button">Edit Team Name</button>
            <input type="file" onChange={handleUploadLogo} className="mt-2 nav-button" />
          </div>
        </div>

        {/* Grid Layout for Color Scheme, News, Schedule, Player Profiles, Social Media Links, and Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Color Scheme */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Color Scheme</h2>
            <div className="flex flex-col mt-2">
              <label className="mb-2">
                Primary Color:
                <input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="ml-2" />
              </label>
              <label>
                Secondary Color:
                <input type="color" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} className="ml-2" />
              </label>
            </div>
          </div>

          {/* Team News */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Team News</h2>
            <ul className="list-disc list-inside mt-2 overflow-auto h-[200px]">
              {news.map(item => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            <button onClick={handleAddNews} className="mt-2 nav-button">Add News</button>
          </div>

          {/* Upcoming Schedule */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Upcoming Schedule</h2>
            <ul className="list-disc list-inside mt-2 overflow-auto h-[200px]">
              {schedule.map(item => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
            <button onClick={handleAddSchedule} className="mt-2 nav-button">Add Schedule</button>
          </div>

          {/* Player Profiles */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Player Profiles</h2>
            <ul className="list-disc list-inside mt-2 overflow-auto h-[200px]">
              {players.map(player => (
                <li key={player.id}>{player.name}</li>
              ))}
            </ul>
            <button onClick={handleAddPlayer} className="mt-2 nav-button">Add Player</button>
          </div>

          {/* Social Media Links */}
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
            <button onClick={handleAddSocialMedia} className="mt-2 nav-button">Add Social Media</button>
          </div>

          {/* Set Team Password */}
          <div className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md h-[300px]">
            <h2 className="text-xl font-bold">Set Team Password</h2>
            <button onClick={handleSetPassword} className="mt-2 nav-button">Set Password</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamAdminPage;