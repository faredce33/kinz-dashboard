function showDashboard() {
  document.getElementById("main-content").innerHTML = `
    <h1>Dashboard View</h1>
    <div class="dashboard-placeholder">
      <p>This is your placeholder for future dashboard tiles like:</p>
      <ul>
        <li>🏇 Horse Racing Tiles</li>
        <li>📈 Wiggle Bots Performance</li>
        <li>🌦️ Weather & Movement Predictor</li>
      </ul>
    </div>
  `;
}

function showSettings() {
  document.getElementById("main-content").innerHTML = `
    <h1>Settings</h1>
    <p>Configure your dashboard preferences here.</p>
  `;
}
