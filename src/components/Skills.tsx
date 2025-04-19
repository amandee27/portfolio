import React from "react";

const skills = [
  "React",
  "Angular",
  "Typescript",
  "Javascript",
  "HTML",
  "CSS",
  "SCSS",
  "AntD",
  "Tailwind CSS",
  "BootStrap",
  "NodeJS",
  "MySQL",
  "Java",
  "NPM",
  "Selenium",
  "Responsive Design",
  "Cross-Browser Compatibility",
  "Agile Development",
  "Scrum",
];

function Skills() {
  return (
    <div className="w-full justify-center bg-slate-800/60 py-12">
      <h1 className="text-center text-5xl mb-12 font-bold">Skills</h1>
      <div className="justify-items-center">
        <div className="w-3xl">
          <div className="flex flex-wrap justify-center align-middle">
            {skills.map((item) => (
              <button
                type="button"
                key={item}
                className="bg-black hover:bg-black border border-white text-white text-[16px] rounded px-3 py-1 mx-2 my-1"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
