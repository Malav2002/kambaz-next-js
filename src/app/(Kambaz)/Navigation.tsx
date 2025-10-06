"use client";

import Link from "next/link";
import { ListGroup } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiBook, BiCalendar } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { IoIosCodeWorking } from "react-icons/io";
export default function KambazNavigation() {
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
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-white text-center">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none"
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          href="/Dashboard"
          id="wd-course-link"
          className="text-danger text-decoration-none"
        >
          <BiBook className="fs-1 text-danger" />
          <br />
          <span className="text-white">Course</span>
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className="text-danger text-decoration-none"
        >
          <BiCalendar className="fs-1 text-danger" />
          <br />
          <span className="text-white">Calendar</span>
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className="text-danger text-decoration-none"
        >
          <HiMiniInboxArrowDown className="fs-1 text-danger" />
          <br />
          <span className="text-white">Inbox</span>
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-danger text-decoration-none"
        >
          <IoIosCodeWorking className="fs-1 text-danger" />
          <br />
          <span className="text-white">Labs</span>
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
}
