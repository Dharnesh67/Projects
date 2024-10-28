import React, { useEffect, useState } from 'react';

function Statistics() {
//   const [stats, setStats] = useState({
//     hoursSpent: 0,
//     videosScrolled: 0,
//   });

//   useEffect(() => {
//     const storedStats = JSON.parse(localStorage.getItem('appStats')) || stats;
//     setStats(storedStats);

//     const updateTimeSpent = () => {
//       const newStats = { ...storedStats, hoursSpent: storedStats.hoursSpent + (5 / 60) };
//       localStorage.setItem('appStats', JSON.stringify(newStats));
//       setStats(newStats);
//     };

//     const interval = setInterval(updateTimeSpent, 300000); // Every 5 minutes
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div>
      {/* <h2>App Usage Statistics</h2>
      <p>Hours Spent: {stats.hoursSpent.toFixed(2)}</p>
      <p>Videos Scrolled: {stats.videosScrolled}</p> */}
        coming soon
    </div>
  );
}

export default Statistics;
