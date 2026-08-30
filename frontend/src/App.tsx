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
  return (
    <div className="app">

      <aside className="sidebar">

        <h1>LifeOS</h1>

        <button className="new-task">
          + New Task
        </button>

        <p className="section-title">WORKSPACE</p>

        <nav>
          <div className="nav-item active">
            <LayoutGrid size={20} />
            <span>Today</span>
          </div>

          <div className="nav-item">
            <CheckSquare size={20} />
            <span>Tasks</span>
          </div>

          <div className="nav-item">
            <Clock size={20} />
            <span>Upcoming</span>
          </div>

          <div className="nav-item">
            <Calendar size={20} />
            <span>Calendar</span>
          </div>
        </nav>

        <p className="section-title">PROGRESS</p>

        <nav>
          <div className="nav-item">
            <Target size={20} />
            <span>Goals</span>
          </div>

          <div className="nav-item">
            <RefreshCw size={20} />
            <span>Habits</span>
          </div>

          <div className="nav-item">
            <BarChart3 size={20} />
            <span>Analytics</span>
          </div>

          <div className="nav-item">
            <Award size={20} />
            <span>Achievements</span>
          </div>
        </nav>

        <div className="sidebar-bottom">

          <div className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </div>

          <div className="nav-item">
            <User size={20} />
            <span>Profile</span>
          </div>

        </div>

      </aside>

      <main className="main-content">
        <h2>Today</h2>
        <p>Your productivity starts here.</p>
      </main>

    </div>
  );
}

export default App;