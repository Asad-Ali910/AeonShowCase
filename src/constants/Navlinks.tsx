import React from "react";
import { IoHome, IoSettings } from "react-Icons/io5";
import { MdWork } from "react-Icons/md";
import { RiContactsLine, RiPagesFill } from "react-Icons/ri";
import { IoMdLogIn } from "react-Icons/io";
import {
  AboutRoute,
  BlogRoute,
  ContactRoute,
  HomeRoute,
  LoginRoute,
  ServicesRoute,
} from "@/constants/ApiRoutes";
type NavLink = {
  label: string;
  href: string;
  Icon?: React.ReactNode;
};

const navLinks: NavLink[] = [
  { label: "Home", href: HomeRoute, Icon: <IoHome /> },
  { label: "About", href: AboutRoute, Icon: <IoSettings /> },
  { label: "Services", href: ServicesRoute, Icon: <MdWork /> },
  { label: "Blog", href: BlogRoute, Icon: <RiPagesFill /> },
  { label: "Contact", href: ContactRoute, Icon: <RiContactsLine /> },
  { label: "Login", href: LoginRoute, Icon: <IoMdLogIn /> },
];

export default navLinks;
