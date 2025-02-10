const LeagueInfoPage = () => {
  const [leagueName, setLeagueName] = useState("Your League Name");
  const [teams, setTeams] = useState([
    { id: 1, name: "Team A", record: "10-5" },
    { id: 2, name: "Team B", record: "8-7" },
  ]);

  return (
    <StyledLayout>
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#dbe0da]">{leagueName}</h1>
        <p className="text-[#dbe0da] mt-4 text-center max-w-2xl">
          View important league details, team rankings, and upcoming events.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
          {teams.map((team) => (
            <div key={team.id} className="bg-[#545e46] p-6 rounded-lg shadow-md text-center border border-[#c9c7c5]">
              <h3 className="text-xl font-bold text-[#dbe0da]">{team.name}</h3>
              <p className="text-[#dbe0da]">Record: {team.record}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledLayout>
  );
};

export default LeagueInfoPage;