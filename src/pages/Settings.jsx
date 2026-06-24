import Sidebar from "../components/Sidebar";
import "../styles/Settings.css";

function Settings() {

  const importData = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const data = JSON.parse(e.target.result);

    localStorage.setItem(
      "problems",
      JSON.stringify(data.problems || [])
    );

    localStorage.setItem(
      "goals",
      JSON.stringify(data.goals || [])
    );

    localStorage.setItem(
      "interviews",
      JSON.stringify(data.interviews || [])
    );

    alert("Data Imported Successfully!");
    window.location.reload();
  };

  reader.readAsText(file);
};

  const exportData = () => {
  const data = {
    problems: JSON.parse(localStorage.getItem("problems")) || [],
    goals: JSON.parse(localStorage.getItem("goals")) || [],
    interviews: JSON.parse(localStorage.getItem("interviews")) || [],
  };

  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "prep-tracker-data.json";
  a.click();

  URL.revokeObjectURL(url);
};

  const problems =
  JSON.parse(localStorage.getItem("problems") || "[]");

  const goals =
  JSON.parse(localStorage.getItem("goals") || "[]");

  const interviews =
  JSON.parse(localStorage.getItem("interviews") || "[]");
  const resetData = () => {
    localStorage.clear();
    alert("All data deleted!");
  };
  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <h1>Settings</h1>

        <div className="settings-card">
          <h3>Reset Data</h3>
          <p>Delete all problems, goals and interviews.</p>

          <button
            className="reset-btn"
            onClick={resetData}
          >
            Reset All Data
          </button>
        </div>
        <div className="settings-card">
      <h3>Profile</h3>
      <p>Name: Soni Yadav</p>
      <p>Role: B.Tech IT Student</p>
       <p>Goal: Full Stack Developer</p>
      </div>
      <div className="settings-card">
     <h3>Statistics</h3>
    <p>Total Problems: {problems.length}</p>
     <p>Total Goals: {goals.length}</p>
     <p>Total Interviews: {interviews.length}</p>
      </div>
      <div className="settings-card">
      <h3>Backup Data</h3>
      <button className="export-btn" onClick={exportData}>
       📥 Export Data
       </button>
       <br/><br/>
       <input type="file" accept=".json" onChange={importData}/>
      </div>
      <div className="settings-card">
      <h3>About</h3>
      <p>Placement Preparation Tracker</p>
       <p>Version 1.0</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;