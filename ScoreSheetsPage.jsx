import React, { useState } from 'react';

const ScoreSheetsPage = ({ userRole }) => {
  const [scoreSheets, setScoreSheets] = useState([
    { id: 1, image: "https://via.placeholder.com/300", description: "Game 1 Score Sheet" },
    { id: 2, image: "https://via.placeholder.com/300", description: "Game 2 Score Sheet" },
  ]);

  const handleUploadScoreSheet = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setScoreSheets([...scoreSheets, { id: scoreSheets.length + 1, image: reader.result, description: `Game ${scoreSheets.length + 1} Score Sheet` }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleManualInput = () => {
    alert("Manual input of stats is not implemented yet.");
  };

  const handleVoiceRecognition = () => {
    alert("Voice recognition input of stats is not implemented yet.");
  };

  const handleOCR = () => {
    alert("OCR input of stats is not implemented yet.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#7c866b] text-[#dbe0da]">
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Score Sheets</h1>

        {/* Display Score Sheets */}
        <div className="flex flex-wrap justify-center gap-6">
          {scoreSheets.map(sheet => (
            <div key={sheet.id} className="bg-[#545e46] p-4 rounded-md text-[#dbe0da] shadow-md text-center w-full max-w-xs">
              <img src={sheet.image} alt={sheet.description} className="w-full h-auto mb-4" />
              <p>{sheet.description}</p>
            </div>
          ))}
        </div>

        {userRole === "team-admin" && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4 text-center">Admin Tools</h2>
            <input type="file" onChange={handleUploadScoreSheet} className="nav-button mb-4" />
            <div className="flex flex-col gap-4 items-center">
              <button onClick={handleManualInput} className="nav-button">Manual Input</button>
              <button onClick={handleVoiceRecognition} className="nav-button">Voice Recognition</button>
              <button onClick={handleOCR} className="nav-button">OCR</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ScoreSheetsPage;