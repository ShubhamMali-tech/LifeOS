function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>LifeOS</h1>

        <nav>
          <p>Today</p>
          <p>Tasks</p>
          <p>Goals</p>
          <p>Calendar</p>
          <p>Analytics</p>
          <p>Achievements</p>
        </nav>

        <div className="sidebar-bottom">
          <p>Settings</p>
          <p>Profile</p>
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