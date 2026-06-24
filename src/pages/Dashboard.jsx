import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import {
  FaBug,
  FaBullseye,
  FaBriefcase,
  FaFire
} from "react-icons/fa";

function Dashboard() {

  const problems =
    JSON.parse(localStorage.getItem("problems") || "[]");

  const goals =
    JSON.parse(localStorage.getItem("goals") || "[]");

  const interviews =
    JSON.parse(localStorage.getItem("interviews") || "[]");

  const totalProblems = problems.length;

  const solvedProblems = problems.filter(
    (p) => p.status === "Solved"
  ).length;

  const totalGoals = goals.length;

  const completedGoals = goals.filter(
    (g) => g.status === "Done"
  ).length;

  const totalInterviews = interviews.length;

  const studyStreak =
    solvedProblems + completedGoals;

  const recentProblems =
    [...problems].slice(-3).reverse();

  const recentGoals =
    [...goals].slice(-3).reverse();

  const recentInterviews =
    [...interviews].slice(-3).reverse();

  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">

        <h1>Welcome Back 👋</h1>

        <p className="subtitle">
          Here's your placement prep at a glance.
        </p>

        <div className="cards">

          <div className="card purple">
            <div className="icon-box">
              <FaBug />
            </div>

            <h3>Problems Solved</h3>
            <h2>{solvedProblems}</h2>
          </div>

          <div className="card blue">
            <div className="icon-box">
              <FaBullseye />
            </div>

            <h3>Total Goals</h3>
            <h2>{totalGoals}</h2>
          </div>

          <div className="card green">
            <div className="icon-box">
              <FaBriefcase />
            </div>

            <h3>Mock Interviews</h3>
            <h2>{totalInterviews}</h2>
          </div>

          <div className="card orange">
            <div className="icon-box">
              <FaFire />
            </div>

            <h3>Study Streak</h3>
            <h2>{studyStreak}</h2>
          </div>

        </div>

        <div className="bottom-section">

          <div className="recent-problems">

            <div className="problem-header">
              <h2>Recent Problems</h2>
              <button>View All</button>
            </div>

            {recentProblems.length > 0 ? (
              recentProblems.map((problem, index) => (
                <div
                  key={index}
                  className="problem"
                >
                  <span>
                    {problem.name}
                  </span>

                  <button
                    className={
                      problem.difficulty?.toLowerCase()
                    }
                  >
                    {problem.difficulty}
                  </button>
                </div>
              ))
            ) : (
              <p>No problems added yet.</p>
            )}

          </div>

          <div className="quick-actions">

            <h2>Quick Actions</h2>

            <button>
              ➕ Log a Problem
            </button>

            <button>
              🎯 Add Today's Goal
            </button>

            <button>
              📝 Save Interview Notes
            </button>

            <button>
              📊 View Analytics
            </button>

          </div>

        </div>

        <div className="recent-section">

          <div className="recent-card">
            <h2>Recent Goals</h2>

            {recentGoals.length > 0 ? (
              recentGoals.map((goal, index) => (
                <p key={index}>
                  {goal.title}
                </p>
              ))
            ) : (
              <p>No goals added yet.</p>
            )}
          </div>

          <div className="recent-card">
            <h2>Recent Interviews</h2>

            {recentInterviews.length > 0 ? (
              recentInterviews.map(
                (interview, index) => (
                  <p key={index}>
                    {interview.company}
                  </p>
                )
              )
            ) : (
              <p>
                No interviews added yet.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;