export default function Modules() {
  return (
    <div>
      {/* Add Module Controls */}
      <div id="wd-modules-controls" className="text-nowrap">
        <button id="wd-collapse-all">Collapse All</button>
        <button id="wd-view-progress">View Progress</button>
        <select id="wd-publish-all">
          <option>Publish All</option>
          <option>Publish All Items</option>
          <option>Unpublish All</option>
        </select>
        <button id="wd-add-module-btn">+ Module</button>
      </div>
      <br /><br />

      {/* Existing Modules List */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Basics of HTML</li>
                <li className="wd-content-item">HTML5 semantic elements</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Fundamentals</li>
                <li className="wd-content-item">CSS Grid and Flexbox</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}