export default function Inbox() {
  return (
    <div id="wd-inbox">
      <h1>Inbox</h1>
      <p>Course messages and notifications will appear here.</p>
      
      {/* Basic inbox placeholder */}
      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}>
        <h3>Recent Messages</h3>
        <div style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
          <strong>Welcome to CS1234</strong><br/>
          <small>From: Professor Smith - 2 days ago</small><br/>
          Welcome to the React.js course! Please review the syllabus...
        </div>
        <div style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
          <strong>Assignment 1 Posted</strong><br/>
          <small>From: TA Johnson - 1 week ago</small><br/>
          Your first assignment is now available in the Assignments section...
        </div>
        <div style={{ padding: "10px 0" }}>
          <strong>Quiz Reminder</strong><br/>
          <small>From: Course System - 3 days ago</small><br/>
          Don&apos;t forget about Quiz 1 scheduled for next week...
        </div>
      </div>
    </div>
  );
}