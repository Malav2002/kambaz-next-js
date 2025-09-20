import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react.jpeg" width={200} height={150} alt="React Course" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpeg" width={200} height={150} alt="Node Course" />
            <div>
              <h5> CS1235 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1236" className="wd-dashboard-course-link">
            <Image src="/images/python.jpeg" width={200} height={150} alt="Python Course" />
            <div>
              <h5> CS1236 Python </h5>
              <p className="wd-dashboard-course-title">
                Data Science and ML
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1237" className="wd-dashboard-course-link">
            <Image src="/images/java.jpeg" width={200} height={150} alt="Java Course" />
            <div>
              <h5> CS1237 Java </h5>
              <p className="wd-dashboard-course-title">
                Enterprise applications
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <Image src="/images/database.jpeg" width={200} height={150} alt="Database Course" />
            <div>
              <h5> CS1238 Databases </h5>
              <p className="wd-dashboard-course-title">
                SQL and NoSQL
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1239" className="wd-dashboard-course-link">
            <Image src="/images/html.jpeg" width={200} height={150} alt="Web Dev Course" />
            <div>
              <h5> CS1239 Web Development </h5>
              <p className="wd-dashboard-course-title">
                HTML, CSS, JavaScript
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1240" className="wd-dashboard-course-link">
            <Image src="/images/mobile.jpeg" width={200} height={150} alt="Mobile Dev Course" />
            <div>
              <h5> CS1240 Mobile Development </h5>
              <p className="wd-dashboard-course-title">
                iOS and Android
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}