import Sidebar from "../components/Sidebar";
import "../styles/Goals.css";
import {useState,useEffect} from "react";
function Goals() {
const [goals, setGoals] = useState(() => {
  const savedGoals =
    localStorage.getItem("goals");

  return savedGoals
    ? JSON.parse(savedGoals)
    : [
        {
          title: "Solve 100 DSA Problem",
          date: "5 May 2026",
          priority: "High",
          status: "Done"
        }
      ];
});
const [priorityFilter, setPriorityFilter] = useState("All");
const [search,setSearch]=useState("");
const [statusFilter, setStatusFilter] = useState("All");
const [sortOrder, setSortOrder] = useState("newest");
const filteredGoals = goals.filter((goal) => {
  const matchSearch =
    goal.title.toLowerCase().includes(search.toLowerCase());

  const matchPriority =
    priorityFilter === "All" ||
    goal.priority === priorityFilter;

  const matchStatus =
    statusFilter === "All" ||
    goal.status === statusFilter;

  return matchSearch && matchPriority && matchStatus;
});
const sortedGoals = [...filteredGoals].sort((a, b) => {
  return sortOrder === "newest"
    ? new Date(b.date) - new Date(a.date)
    : new Date(a.date) - new Date(b.date);
});
const addGoal = () => {
  const title = prompt("Enter Goal Name");

  if (!title) return;

  setGoals([
    ...goals,
    {
      title,
      date: "24 Jun 2026",
      priority: "Medium",
      status: "In Progress"
    }
  ]);
};
useEffect(() => {
  localStorage.setItem(
    "goals",
    JSON.stringify(goals)
  );
}, [goals]);
const deleteGoal = (index) => {
  const updatedGoals = goals.filter(
    (_, i) => i !== index
  );
  setGoals(updatedGoals);
};
const editGoal = (index) => {
  const newTitle = prompt(
    "Enter new goal name",
    goals[index].title
  );

  if (!newTitle) return;

  const updatedGoals = [...goals];
  updatedGoals[index].title = newTitle;

  setGoals(updatedGoals);
};
  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <div className="goal-header">
          <h1>Daily Goals</h1>

          <button className="add-goal-btn" onClick={addGoal}>
            + Add Goal
          </button>
        </div>

        <input
          type="text"
          placeholder="Search goals..."
          className="goal-search" value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <div className="goal-filters">
        <select onChange={(e)=>setPriorityFilter(e.target.value)}>
        <option>All Priorities</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
        </select>
        <select onChange={(e)=>setStatusFilter(e.target.value)}>
        <option>All Status</option>
        <option>Done</option>
         <option>In Progress</option>
        </select>
        <select onChange={(e)=>setSortOrder(e.target.value)}>
         <option value="newest">Newest First</option>
         <option value="oldest">Oldest First</option>
        </select>
        </div>

{sortedGoals.map((goal, index) => (
  <div key={index} className="goal-card">

    <div className="goal-left">
      <span className="goal-icon">🎯</span>

      <div>
        <h3>{goal.title}</h3>
      </div>
    </div>

    <div className="goal-date">
      📅 {goal.date}
    </div>

    <div className={`priority ${goal.priority?.toLowerCase()}`}>
      {goal.priority}
    </div>

    <div className={`status ${goal.status?.toLowerCase()}`}>
      {goal.status}
    </div>

    <button className="edit-btn" onClick={()=>editGoal(index)}>Edit</button>
    <button className="delete-btn" onClick={()=>deleteGoal(index)}>Delete</button>

  </div>
))}

      </div>
    </div>
  );
}

export default Goals;