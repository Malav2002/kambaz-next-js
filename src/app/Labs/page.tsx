import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <strong>Name: </strong> Malav Patel
      <br />
      <strong>Course: </strong> CS5610 - Web Development
      <br />
      <strong>Section: </strong> 04
      <br />
      <strong>Source Code: </strong>{" "}
      <a
        href="https://github.com/Malav2002/kambaz-next-js"
        id="wd-github"
      >
        GitHub Frontend Repository
      </a>
      <br />
      <a
        href="https://github.com/Malav2002/kambaz-node-server-app"
        id="wd-github"
      >
        GitHub Backend Repository 
      </a>
      <br />
      <a
        href="https://kambaz-node-server-app-5kup.onrender.com"
        id="wd-github"
      >
        Render
      </a>
      <br />
      <br />
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4: Maintaining State in React Applications
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab5" id="wd-lab5-link">
            Lab 5: Implementing RESTful Web APIs with Express.js
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}
