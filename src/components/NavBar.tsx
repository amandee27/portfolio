"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Links = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contributions", text: "Contributions" },
  { href: "/skills", text: "Skills" },
  { href: "/contact", text: "Contact" },
];

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contributions", label: "Contributions" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Animation variants for the navigation items
// const navItemVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.1 * i,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

const scrollToSection = (id: string) => {
  console.log(id);
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
function NavBar() {
  return (
    <div>
      <nav className="bg-black-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {navItems.map((item) => (
                    <a
                      className="cursor-pointer rounded-md bg-black-900 px-3 py-2 text-sm font-medium text-white"
                      aria-current="page"
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/about">About</Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/projects">Projects</Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/contributions">Contributions</Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/skills">Skills</Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {" "}
          <Link href="/contact">Contact</Link>
        </motion.div> */}
    </div>
  );
}

export default NavBar;
