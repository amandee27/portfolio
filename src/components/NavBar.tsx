"use client";
import React from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contributions", label: "Contributions" },
  { id: "contact", label: "Contact" },
];

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
    <nav className="bg-black sticky top-0 z-50 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <a
                    className="cursor-pointer rounded-md bg-black-900 px-3 py-2 text-base font-medium text-white"
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
  );
}

export default NavBar;
