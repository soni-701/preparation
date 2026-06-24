import { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Interviews.css";

function Interviews() {
  const [search, setSearch] = useState("");

  const [interviews, setInterviews] = useState(()=>{
    return JSON.parse(localStorage.getItem("interviews"))||[
        {
      company: "TCS",
      round: "Technical",
      status: "Completed",
      date: "19 Apr 2026",
      score: "9/10",
      feedback: "Good",
    },
    ];
  });
  useEffect(()=>{
    localStorage.setItem("interviews",JSON.stringify(interviews));
  },[interviews]);

  const addInterview = () => {
    const company = prompt("Company Name");

    if (!company) return;

    setInterviews([
      ...interviews,
      {
        company,
        round: "Technical",
        status: "Scheduled",
        date: "24 Jun 2026",
        score: "0/10",
        feedback: "Pending",
      },
    ]);
  };

  const deleteInterview = (index) => {
    const updated = interviews.filter((_, i) => i !== index);
    setInterviews(updated);
  };

  const editInterview = (index) => {
    const newCompany = prompt(
      "Enter Company Name",
      interviews[index].company
    );

    if (!newCompany) return;

    const updated = [...interviews];
    updated[index].company = newCompany;

    setInterviews(updated);
  };

  const filteredInterviews = interviews.filter((interview) =>
    interview.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <div className="interview-header">
          <div>
            <h1>Mock Interview Notes</h1>
            <p>
              Capture questions, feedback and scores after every mock.
            </p>
          </div>

          <button
            className="add-btn"
            onClick={addInterview}
          >
            + Add Interview
          </button>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by company..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        {filteredInterviews.map((interview, index) => (
          <div
            key={index}
            className="interview-card"
          >
            <div className="card-top">
              <h2>{interview.company}</h2>

              <h1 className="score">
                {interview.score}
              </h1>
            </div>

            <p>
              {interview.round} • {interview.date}
            </p>

            <h4>QUESTIONS</h4>

            <div className="box">
              <p>1. Reverse Linked List</p>
              <p>2. TCP vs UDP</p>
            </div>

            <h4>FEEDBACK</h4>

            <div className="box">
              {interview.feedback}
            </div>

            <div className="btns">
              <button
                className="edit"
                onClick={() =>
                  editInterview(index)
                }
              >
                Edit
              </button>

              <button
                className="delete"
                onClick={() =>
                  deleteInterview(index)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interviews;