export default function Calendar() {
  return (
    <div id="wd-calendar">
      <h1>Calendar</h1>
      <p>Course calendar and upcoming events will appear here.</p>
      
      {/* Basic calendar placeholder */}
      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}>
        <h3>Upcoming Events</h3>
        <ul>
          <li>Assignment 1 Due - June 15, 2025</li>
          <li>Quiz 1 - June 20, 2025</li>
          <li>Midterm Exam - July 1, 2025</li>
          <li>Project Proposal Due - July 10, 2025</li>
        </ul>
      </div>
    </div>
  );
}