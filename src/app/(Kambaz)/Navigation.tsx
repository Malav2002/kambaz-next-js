"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiBook, BiCalendar } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { IoIosCodeWorking } from "react-icons/io";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/Account", icon: FaRegCircleUser, label: "Account", id: "wd-account-link" },
    { href: "/Dashboard", icon: AiOutlineDashboard, label: "Dashboard", id: "wd-dashboard-link" },
    { href: "/Dashboard", icon: BiBook, label: "Courses", id: "wd-course-link" },
    { href: "/Calendar", icon: BiCalendar, label: "Calendar", id: "wd-calendar-link" },
    { href: "/Inbox", icon: HiMiniInboxArrowDown, label: "Inbox", id: "wd-inbox-link" },
    { href: "/Labs", icon: IoIosCodeWorking, label: "Labs", id: "wd-labs-link" },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      <ListGroup.Item
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroup.Item>

      {links.map((link, index) => {
        const Icon = link.icon;
        const isActive = pathname.startsWith(link.href);

        return (
          <ListGroup.Item
            key={index}
            className={`border-0 text-center ${
              isActive ? "bg-white" : "bg-black"
            }`}
          >
            <Link
              href={link.href}
              id={link.id}
              className="text-decoration-none d-block"
            >
              <Icon
                className={`fs-1 ${isActive ? "text-danger" : "text-white"}`}
              />
              <br />
              <span className={isActive ? "text-danger" : "text-white"}>
                {link.label}
              </span>
            </Link>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}