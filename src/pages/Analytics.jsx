import Sidebar from "../components/Sidebar";
import "../styles/Analytics.css";

function Analytics() {

  const problems =
    JSON.parse(localStorage.getItem("problems") || "[]");

  const goals =
    JSON.parse(localStorage.getItem("goals") || "[]");

  const interviews =
    JSON.parse(localStorage.getItem("interviews") || "[]");

  const total = problems.length;

  const solved = problems.filter(
    p => p.status === "Solved"
  ).length;

  const attempted = problems.filter(
    p => p.status === "Attempted"
  ).length;

  const pending = problems.filter(
    p => p.status === "Pending"
  ).length;

  const completedGoals = goals.filter(
    g => g.status === "Done"
  ).length;

  const goalPercent =
    goals.length > 0
      ? (completedGoals / goals.length) * 100
      : 0;

  const solvedPercent =
    total > 0
      ? (solved / total) * 100
      : 0;

  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <h1>Analytics</h1>

        <p className="subtitle">
          Visualize your placement preparation progress.
        </p>

        <div className="stats-cards">

          <div className="stat-card">
            <h4>Total Problems</h4>
            <h2>{total}</h2>
          </div>

          <div className="stat-card">
            <h4>Solved</h4>
            <h2>{solved}</h2>
          </div>

          <div className="stat-card">
            <h4>Total Goals</h4>
            <h2>{goals.length}</h2>
          </div>

          <div className="stat-card">
            <h4>Interviews</h4>
            <h2>{interviews.length}</h2>
          </div>

        </div>

        <div className="progress-box">

          <h3>Progress Bars</h3>

          <p>
            Problems Solved ({solved}/{total})
          </p>

          <div className="progress">
            <div
              className="progress-fill solved"
              style={{ width: `${solvedPercent}%` }}
            ></div>
          </div>

          <p>
            Goal Completion ({completedGoals}/{goals.length})
          </p>

          <div className="progress">
            <div
              className="progress-fill goal"
              style={{ width: `${goalPercent}%` }}
            ></div>
          </div>

        </div>

        <div className="activity-box">
          <h3>Weekly Activity</h3>

          <div className="bars">
            <div className="bar" style={{ height: "80px" }}>
              7
            </div>

            <div className="bar" style={{ height: "60px" }}>
              5
            </div>

            <div className="bar" style={{ height: "100px" }}>
              9
            </div>

            <div className="bar" style={{ height: "40px" }}>
              3
            </div>

            <div className="bar" style={{ height: "120px" }}>
              10
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;