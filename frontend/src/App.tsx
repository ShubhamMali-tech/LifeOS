import { useState } from "react";
import {
  LayoutGrid,
  CheckSquare,
  Clock,
  Calendar,
  Target,
  RefreshCw,
  BarChart3,
  Award,
  Settings,
  User,
} from "lucide-react";

function App() {
  const [page, setPage] = useState("Today");

  return (
    <div className="app">

      <aside className="sidebar">

        <h1>LifeOS</h1>

        <button className="new-task">
          + New Task
        </button>

        <p className="section-title">WORKSPACE</p>

        <nav>
          <div
            className={`nav-item ${page === "Today" ? "active" : ""}`}
            onClick={() => setPage("Today")}
          >
            <LayoutGrid size={20} />
            <span>Today</span>
          </div>

          <div
            className={`nav-item ${page === "Tasks" ? "active" : ""}`}
            onClick={() => setPage("Tasks")}
          >
            <CheckSquare size={20} />
            <span>Tasks</span>
          </div>

          <div
            className={`nav-item ${page === "Upcoming" ? "active" : ""}`}
            onClick={() => setPage("Upcoming")}
          >
            <Clock size={20} />
            <span>Upcoming</span>
          </div>

          <div
            className={`nav-item ${page === "Calendar" ? "active" : ""}`}
            onClick={() => setPage("Calendar")}
          >
            <Calendar size={20} />
            <span>Calendar</span>
          </div>
        </nav>

        <p className="section-title">PROGRESS</p>

        <nav>
          <div
            className={`nav-item ${page === "Goals" ? "active" : ""}`}
            onClick={() => setPage("Goals")}
          >
            <Target size={20} />
            <span>Goals</span>
          </div>

          <div
            className={`nav-item ${page === "Habits" ? "active" : ""}`}
            onClick={() => setPage("Habits")}
          >
            <RefreshCw size={20} />
            <span>Habits</span>
          </div>

          <div
            className={`nav-item ${page === "Analytics" ? "active" : ""}`}
            onClick={() => setPage("Analytics")}
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </div>

          <div
            className={`nav-item ${page === "Achievements" ? "active" : ""}`}
            onClick={() => setPage("Achievements")}
          >
            <Award size={20} />
            <span>Achievements</span>
          </div>
        </nav>

        <div className="sidebar-bottom">

          <div
            className={`nav-item ${page === "Settings" ? "active" : ""}`}
            onClick={() => setPage("Settings")}
          >
            <Settings size={20} />
            <span>Settings</span>
          </div>

          <div
            className={`nav-item ${page === "Profile" ? "active" : ""}`}
            onClick={() => setPage("Profile")}
          >
            <User size={20} />
            <span>Profile</span>
          </div>

        </div>

      </aside>

      <main className="main-content">
        <h2>{page}</h2>
        <p>Your productivity starts here.</p>
      </main>

    </div>
  );
}

export default App;