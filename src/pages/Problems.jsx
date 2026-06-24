import Sidebar from "../components/Sidebar";
import "../styles/Problems.css";
import {useState,useEffect} from "react";
function Problems() {
    const [problems, setProblems] = useState([
  {
    name: "median of two sorted arrays",
    difficulty: "Hard",
    status: "Pending",
    platform: "Codeforces",
    date: "10 May 2026"
  },
  {
    name: "Anagram",
    difficulty: "Medium",
    status: "Attempted",
    platform: "Leetcode",
    date: "9 May 2026"
  }
]); 
const [search,setSearch]=useState("");
const [difficulty,setDifficulty]=useState("");
const [status,setStatus]=useState("");
const [platform,setPlatform]=useState("");
const [sortorder,setSortorder]=useState("newest");
useEffect(()=>{
    localStorage.setItem("problems",JSON.stringify(problems));
},[problems]); 
const addProblem = () => {
  const name = prompt("Enter Problem Name");

  if (!name) return;

  const newProblem = {
    name,
    difficulty: "Easy",
    status: "Solved",
    platform: "Leetcode",
    date: "2026-06-24"
  };

  setProblems([...problems, newProblem]);
};
const deleteproblem=(index)=>{
    const updateproblem=problems.filter((_,i)=>i!==index);
    setProblems(updateproblem);
}
const editProblem = (index) => {
  const newName = prompt(
    "Enter new problem name:",
    problems[index].name
  );

  if (newName) {
    const updatedProblems = [...problems];

    updatedProblems[index].name = newName;

    setProblems(updatedProblems);
  }
};
  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">

        <div className="problem-header">
          <div>
            <h1>Problem Tracker</h1>
            <p>Log every problem you solve and watch your progress grow.</p>
          </div>

          <button className="add-problem-btn" onClick={addProblem}>
            + Add Problem
          </button>
          {/* <button>TEDT BUTTON</button> */}
        </div>

        <div className="filters">

          <input
            type="text"
            placeholder="🔍 Search by name..."
           value={search} onChange={(e)=>setSearch(e.target.value)}/>

          <select value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
            <option value="">All difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          < select value={platform} onChange={(e)=>setPlatform(e.target.value)} >
            <option value="">All platforms</option>
            <option value="Leetcode">Leetcode</option>
            <option value="Codeforces">Codeforces</option>
          </select>

          <select value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value="">All statuses</option>
            <option value="Solved">Solved</option>
            <option value="Attempted">Atttempted</option>
            <option value="Pending">Pending</option>
          </select>

          <select value={sortorder} onChange={(e)=>setSortorder(e.target.value)}>
            <option value="newest">Newest first</option>
             <option value="oldest">Oldest first</option>
          </select>

        </div>

        <div className="problem-table">

          {problems.filter((problem)=>problem.name.toLowerCase().includes(search.toLowerCase())).filter((problems)=>difficulty===""||problems.difficulty===difficulty).filter((problems)=>status===""||problems.status===status).filter((problems)=>platform===""||problems.platform===platform).sort((a,b)=>{
            if (sortorder==="newest"){
                return new Date(b.date)-new Date(a.date);
            }
            return new Date(a.date)-new Date(b.date);
          }).map((problem, index) => (
  <div className="problem-row" key={index}>
    <div>
      <h3>{problem.name}</h3>
      <p>{problem.platform}</p>
    </div>

    <span>{problem.difficulty}</span>

    <span>{problem.status}</span>

    <p>{problem.date}</p>

    <div>
      <button className="edit-btn" onClick={()=>editProblem(index)}>Edit</button>
      <button className="delete-btn" onClick={()=>deleteproblem(index)}>Delete</button>
    </div>
  </div>
))}
        </div>

      </div>
    </div>
  );
}

export default Problems;