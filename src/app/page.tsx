import Header from "@/components/layout/Header";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contributions from "@/components/Contributions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 bg-gray-700/20">
          <section id="about">
            <AboutMe></AboutMe>
          </section>
          <section id="skills">
            <Skills></Skills>
          </section>
          <section id="projects">
            <Projects></Projects>
          </section>
          <section id="contributions">
            <Contributions></Contributions>
          </section>
          <section id="contact">
            <Contact></Contact>
          </section>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}
