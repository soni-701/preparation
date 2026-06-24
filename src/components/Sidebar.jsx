import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
function Sidebar() {

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }

    window.location.reload();
  };

  return (
    <div className="sidebar">

      <div className="logo">
        <h2>📊 Prep Tracker</h2>
      </div>

      <div className="menu">

        <Link to="/" className="menu-item">
          📊 Dashboard
        </Link>

        <Link to="/problems" className="menu-item">
          💻 Problems
        </Link>

        <Link to="/goals" className="menu-item">
          🎯 Goals
        </Link>

        <Link to="/interviews" className="menu-item">
          💼 Interviews
        </Link>

        <Link to="/analytics" className="menu-item">
          📈 Analytics
        </Link>

        <Link to="/settings" className="menu-item">
          ⚙️ Settings
        </Link>

      </div>

      <div className="sidebar-footer">
       <button
  className="theme-toggle"
  onClick={toggleTheme}
>
  {localStorage.getItem("theme") === "dark"
    ? "☀️ Light Mode"
    : "🌙 Dark Mode"}
</button>
      </div>

    </div>
  );
}

export default Sidebar;