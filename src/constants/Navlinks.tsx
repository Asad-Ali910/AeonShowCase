import React from "react";
import { IoHome, IoSettings } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiContactsLine, RiPagesFill } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
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
